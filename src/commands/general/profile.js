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

    exec(msg, {user: {id}}) {
        console.log(id)
    }
}