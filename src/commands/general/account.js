const {Command} = require('discord-akairo')

module.exports = class extends Command {
    constructor() {
        super('general__account', {
            aliases: ['계정', 'account'],
            args: [
                {
                    id: 'type',
                    type: 'string',
                    prompt: {
                        start: '작업을 입력해주세요(계정)'
                    }
                },
                {
                    id: 'args',
                    type: 'string',
                    match: 'rest',
                    default: null
                }
            ],
            channel: 'dm'
        })
    }

    exec(msg, {type, args}) {
        switch (type) {
            case '계정':
            default:
                return msg.reply(`계정 생성 튜토리얼을 시작합니다.\n\n${this.client.commandHandler.prefix}계정 닉네임 (이름) 을 통해 닉네임을 설정해주세요.`)
        }
    }
}