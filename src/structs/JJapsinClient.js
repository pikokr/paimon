const { AkairoClient } = require('discord-akairo')
const { Team } = require('discord.js')

module.exports = class JJapsinClient extends AkairoClient {
    constructor() {
        super({
            disableMentions: 'everyone'
        });
    }

    async start() {
        await this.login(process.env.DISCORD_TOKEN)
        const app = await this.fetchApplication()
        let owners = []

        if (app.owner) {
            if (app.owner instanceof Team) {
                owners = app.owner.members.keyArray()
            } else {
                owners = app.owner.id
            }
        }

        this.ownerID = owners
    }
}
