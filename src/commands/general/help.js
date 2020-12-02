const {Command} = require('discord-akairo')

module.exports = class extends Command {
    constructor() {
        super('general__help', {
            aliases: ['help']
        })
    }

    exec(msg, args) {
        console.log('핸들러 테스트')
    }
}