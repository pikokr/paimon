const {Listener} = require('discord-akairo')

module.exports = class extends Listener {
    constructor() {
        super('common__ready', {
            emitter: 'client',
            event: 'ready'
        })
    }

    exec(...args) {
        if (!this.client.shard) return process.exit(1)
        console.log(`[INFO] Shard #${this.client.shard.ids.reduce((acc, cur) => acc + cur)} ready!`)
    }
}