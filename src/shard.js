process.on('unhandledRejection', console.error)
process.on('uncaughtException', console.error)

const JJapsinClient = require('./structs/JJapsinClient')

const client = new JJapsinClient()

client.start()
