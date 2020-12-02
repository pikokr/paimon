const path = require("path");
const { AkairoClient, ListenerHandler, CommandHandler } = require('discord-akairo')
const { Team } = require('discord.js')
const Dokdo = require('dokdo')

module.exports = class JJapsinClient extends AkairoClient {
    constructor() {
        super({
            disableMentions: 'everyone'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: path.join(__dirname, '../listeners')
        })

        this.commandHandler = new CommandHandler(this, {
            directory: path.join(__dirname, '../commands'),
            prefix: 'g!!'
        })

        this.listenerHandler.setEmitters({
            client: this,
            listener: this.listenerHandler,
            command: this.commandHandler
        })

        this.listenerHandler.loadAll()
        this.commandHandler.loadAll()
    }

    async start() {
        await this.login(process.env.DISCORD_TOKEN)
        const app = await this.fetchApplication()
        let owners = []

        if (app.owner) {
            if (app.owner instanceof Team) {
                owners = app.owner.members.map(r=>r.id)
            } else {
                owners = [app.owner.id]
            }
        }

        this.ownerID = owners

        this.dokdo = new Dokdo(this, {
            prefix: 'g!!'
        })

        this.on('message', msg => this.dokdo.run(msg))
    }
}
