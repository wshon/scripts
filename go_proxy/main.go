package go_proxy

import (
	"bytes"
	"encoding/binary"
	"fmt"
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
	server, err := net.Listen("tcp", ":10809")
	if err != nil {
		log.Panic(err)
	}
	defer server.Close()
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
	defer conn.Close()

	var b [1024]byte

	count, err := conn.Read(b[:])
	if err != nil {
		log.Println(err)
		return
	}
	log.Printf("% x", b[:count])

	conn.Write([]byte{0x05, 0x00})

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

	server, err := net.Dial("tcp", addr)
	if err != nil {
		log.Println(err)
		return
	}
	defer server.Close()
	conn.Write([]byte{0x05, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00})

	go io.Copy(server, conn)
	io.Copy(conn, server)
}

func main() {
	socks5ProxyStart()
}
