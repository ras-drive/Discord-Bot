import 'dotenv/config'
import { Client, Intents } from 'discord.js'

// Creates a client instance
const client: Client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// Client run status logger
client.once('ready', () => {
  console.log('Ready!')
})

// Logs in with bot's Discord token from dotenv file
client.login(process.env.BOT_TOKEN)
