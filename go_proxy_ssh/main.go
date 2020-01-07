package main

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"golang.org/x/crypto/ssh"
	"io"
	"log"
	"net"
)

type endPoint struct {
	A, B, C, D byte
	PORT       uint16
}

func (host endPoint) toAddr() string {
	return fmt.Sprintf("%d.%d.%d.%d:%d", host.A, host.B, host.C, host.D, host.PORT)
}

func socks5ProxyStart() {
	server, err := net.Listen("tcp", ":1080")
	if err != nil {
		log.Panic(err)
	}
	defer func() { _ = server.Close() }()
	log.Println("Proxy Start")
	for {
		client, err := server.Accept()
		if err != nil {
			log.Println(err)
			return
		}
		log.Println("Client Accept")
		go socks5Proxy(client)
	}
}

func socks5Proxy(conn net.Conn) {
	defer func() { _ = conn.Close() }()

	var b [1024]byte

	count, err := conn.Read(b[:])
	if err != nil {
		log.Println(err)
		return
	}
	log.Printf("% x", b[:count])

	_, _ = conn.Write([]byte{0x05, 0x00})

	count, err = conn.Read(b[:])
	if err != nil {
		log.Println(err)
		return
	}
	log.Printf("% x", b[:count])

	var addr string
	switch b[3] {
	case 0x01:
		sip := endPoint{}
		if err := binary.Read(bytes.NewReader(b[4:count]), binary.BigEndian, &sip); err != nil {
			log.Println("Target Error")
			return
		}
		addr = sip.toAddr()
	case 0x03:
		host := string(b[5 : count-2])
		var port uint16
		if err := binary.Read(bytes.NewReader(b[count-2:count]), binary.BigEndian, &port); err != nil {
			log.Println(err)
			return
		}
		addr = fmt.Sprintf("%s:%d", host, port)
	}

	server, err := sshClient.Dial("tcp", addr)
	if err != nil {
		log.Println(err)
		return
	}
	defer func() { _ = server.Close() }()
	_, _ = conn.Write([]byte{0x05, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00})

	go func() { _, _ = io.Copy(server, conn) }()
	_, _ = io.Copy(conn, server)
}

var sshClient *ssh.Client

func main() {
	config := ssh.ClientConfig{
		User: "user",
		Auth: []ssh.AuthMethod{
			ssh.Password("pass"),
		},
		HostKeyCallback: func(hostname string, remote net.Addr, key ssh.PublicKey) error {
			return nil
		},
	}
	var err error
	sshClient, err = ssh.Dial("tcp", "ip:22", &config)
	if err != nil {
		log.Println(err)
		return
	}
	log.Println("Server connect success")
	defer func() { _ = sshClient.Close() }()
	//sshClient.Dial("tcp", "8.8.8.8")
	socks5ProxyStart()
	return
}
