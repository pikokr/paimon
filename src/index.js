require('dotenv').config()
const path = require("path");
const { ShardingManager } = require('discord.js')

const manager = new ShardingManager(path.join(__dirname, 'shard.js'), {
    respawn: true,
    token: process.env.DISCORD_TOKEN
})

