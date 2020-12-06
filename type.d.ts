declare module 'discord.js' {
    import Knex = require("knex");

    interface Client {
        db: Knex
    }
}