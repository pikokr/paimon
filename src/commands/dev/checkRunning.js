const {Command} = require('discord-akairo')

module.exports = class extends Command {
    constructor() {
        super('dev__check_running', {
            aliases: ['작동확인'],
            ownerOnly: true
        })
    }

    async exec(msg, args) {
        await msg.react('✅')
    }
}