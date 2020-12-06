declare module 'discord.js' {
    import Knex = require("knex");
    import {CommandHandler, ListenerHandler} from "discord-akairo";

    interface Client {
        db: Knex
        commandHandler: CommandHandler
        listenerHandler: ListenerHandler
    }
}