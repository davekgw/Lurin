const fs = require('fs')

const config = {
    owner: "-",
    botNumber: "-",
    setPair: "DAVEKGOW",
    thumbUrl: "https://github.com/kiuur.png",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "Dev_",
        packname: 'self-wabot',
        description: "Smiley_",
        author: 'https://github.com/davekgw',
        footer: "SelfBot"
    },
    newsletter: {
        name: "Smiley",
        id: "123"
    },
    socialMedia: {
        YouTube: "-",
        GitHub: "https://github.com/davekgw",
        Telegram: "https://t.me/davekgw",
        ChannelWA: "https://whatsapp.com/channel/0029Vaeqym9IHphHwvXk9k1s"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
