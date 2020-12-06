const {Listener} = require('discord-akairo')

module.exports = class extends Listener {
    constructor() {
        super('common__command_blocked', {
            emitter: 'command',
            event: 'commandBlocked'
        })
    }

    async exec(msg, cmd, reason) {
        await msg.react('🛑')
        switch (reason) {
            case 'dm':
                await msg.channel.send('이 명령어는 DM에서만 사용 가능합니다.')
        }
    }
}