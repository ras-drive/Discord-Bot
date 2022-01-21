// import 'dotenv/config'
import EnvLoader from './EnvLoader'
import { Collection } from 'discord.js'
import BotClient from './BotClient'
import fs from 'fs'
import { Choices } from './util/EnvChoices'

EnvLoader.load(Choices.BOT)

// Creates a client instance
const client = new BotClient()

client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  // Set the command in the collection
  // with the key being the name and
  // the value being the exported module
  client.commands.set(command.data.name, command)
}

// Client run status logger
client.once('ready', () => {
  console.log('Ready!')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const command = client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (e) {
    console.error(e)
    await interaction.reply({ content: 'There was an error while executing this command', ephemeral: true })
  }
})

// Logs in with bot's Discord token from dotenv file
client.login(process.env.TOKEN)
