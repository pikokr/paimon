const {Command} = require('discord-akairo')

module.exports = class extends Command {
    constructor() {
        super('general__profile', {
            aliases: ['프로필', 'profile'],
            args: [
                {
                    default: (msg) => msg.author,
                    type: 'user',
                    id: 'user'
                }
            ]
        })
    }

    async exec(msg, {user: {id}}) {
        const u = await this.client.db('users').where({id}).then(r=>r[0])
        if (!u) {
            return msg.reply('유저를 찾을 수 없습니다.')
        }
    }
}