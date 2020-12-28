import logging

from telethon import TelegramClient, events

logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.WARNING)

# These example values won't work. You must get your own api_id and
# api_hash from https://my.telegram.org, under API Development.
api_id = 12345
api_hash = '0123456789abcdef0123456789abcdef'

client = TelegramClient('Sss', api_id, api_hash, proxy=("socks5", '127.0.0.1', 1080))

save_id = None
save_id_tmp = None


@client.on(events.NewMessage)
async def my_event_handler(event):
    global save_id, save_id_tmp
    if 'save here' in event.raw_text:
        save_id_tmp = event.chat_id
        await event.reply('save in "' + event.chat.title + '"?')
    if save_id_tmp == event.chat_id:
        if 'yes' in event.raw_text:
            save_id = event.chat_id
            await event.reply('start save in "' + event.chat.title + '"!')
    if event.chat_id == -1001298170329:
        # print(event.raw_text)
        print(event.message)
        if not event.message.media:
            return
        if save_id is not None:
            print("saved.")
            await client.send_message(save_id, event.message)


client.start()
client.run_until_disconnected()
