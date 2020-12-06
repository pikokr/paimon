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
                        start: '작업을 입력해주세요(닉네임)'
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

    async exec(msg, {type, args}) {
        switch (type) {
            case '닉네임':
                if (!args) {
                    return msg.reply(`명령어 사용법: ${this.client.commandHandler.prefix}계정 닉네임 (이름)`)
                }

                const m = await msg.channel.send(`현재 입력하신 닉네임은 ${args} 입니다.\n계속 하시겠습니까?`)
                const emojis = ['⭕','❌']

                await Promise.all(emojis.map(it => m.react(it)))

                const collected = await m.awaitReactions((reaction,user) => user.id === msg.author.id && emojis.includes(reaction.emoji.name), {
                    max: 1,
                    maxEmojis: 1,
                    time: 30000
                })

                let created

                if (!collected.size) return msg.reply('시간초과 되었습니다.')

                if (collected.first().emoji.name === emojis[1]) {
                    return msg.reply('취소되었습니다.')
                }

                if (await this.client.db('users').where({id: msg.author.id}).then(r=>r[0])) {
                    created = false
                    await this.client.db('users').limit(1).where({id: msg.author.id}).update({name: args})
                } else {
                    created = true
                    await this.client.db('users').insert({name: args, id: msg.author.id})
                }

                await msg.channel.send(`닉네임이 ${args}(으)로 설정되었습니다!${created ? '\n계정이 생성되었습니다!' : ''}`)
                return
            default:
                return msg.reply(`계정 생성 튜토리얼을 시작합니다.\n\n${this.client.commandHandler.prefix}계정 닉네임 (이름) 을 통해 닉네임을 설정해주세요.`)
        }
    }
}