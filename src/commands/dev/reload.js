const {Command} = require('discord-akairo')

module.exports = class extends Command {
    constructor() {
        super('dev__reload', {
            aliases: ['reload', 'rl'],
            ownerOnly: true
        })
    }

    async exec(msg, args) {
        Object.keys(require.cache).filter(r=>!r.includes('node_modules')).forEach(it => delete require.cache[it])
        this.client.commandHandler.categories.map(it => it.removeAll())
        this.client.listenerHandler.categories.map(it => it.removeAll())
        this.client.listenerHandler.loadAll()
        this.client.commandHandler.loadAll()
        await msg.react('✅')
    }
}