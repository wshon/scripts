import logging
import sqlite3

from telethon import TelegramClient, events
from telethon.tl.custom.message import Message
from telethon.utils import pack_bot_file_id, resolve_bot_file_id

logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)
logger = logging.getLogger(__name__)

conn = sqlite3.connect("tg_save_bot.db", isolation_level=None)
# Create table
conn.execute('''CREATE TABLE IF NOT EXISTS T_TG_FILE (
    F_FILE_ID TEXT NOT NULL UNIQUE, 
    F_MESSAGE TEXT, 
    F_TIMESTAMP TIMESTAMP NOT NULL DEFAULT (datetime('now','localtime'))
);''')

# These example values won't work. You must get your own api_id and
# api_hash from https://my.telegram.org, under API Development.
api_id = 123456
api_hash = 'abcdefghijklmnopqrstuvwxyz123456'

bot_token = '123456:abcdefghijklmnopqrstuvwxyz123456'
bot = TelegramClient('tg_save_bot', api_id, api_hash).start(bot_token=bot_token)


@bot.on(events.NewMessage(pattern='/start'))
async def send_welcome(event):
    await event.reply('Howdy, how are you doing?')


@bot.on(events.NewMessage())
async def my_event_handler(event: events.NewMessage.Event):
    message: Message = event.message
    if 'hello' in message.raw_text:
        await message.reply(f'hi {message.chat_id}')
    elif file := resolve_bot_file_id(message.raw_text):
        await bot.send_file(event.chat, file, caption=message.raw_text)
        await message.delete()
    elif message.media:
        bot_file_id = pack_bot_file_id(message.media)
        try:
            conn.execute('INSERT INTO T_TG_FILE (F_FILE_ID, F_MESSAGE) VALUES (?, ?)', (bot_file_id, message.text))
        except sqlite3.IntegrityError:
            pass
        message.text = f'{bot_file_id}'
        await bot.send_message(event.chat, message)
        await message.delete()


try:
    bot.start()
    bot.run_until_disconnected()
except Exception:
    logger.exception("system stop")
finally:
    conn.close()
