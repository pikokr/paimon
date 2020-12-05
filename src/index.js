require('dotenv').config()
const path = require("path");
const { ShardingManager } = require('discord.js')
const config = require('../config.json')

const manager = new ShardingManager(path.join(__dirname, 'shard.js'), {
    respawn: true,
    token: config.token
})

manager.spawn()
