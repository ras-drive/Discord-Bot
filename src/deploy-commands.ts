import EnvLoader from './EnvLoader'
import fs from 'fs'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { Choices } from './util/EnvChoices'

EnvLoader.load(Choices.BOT)

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}

// This is just because Typescript gets mad, the types
// are already checked in the EnvLoader class to make
// sure they are valid, this is to stop compile errors
const token: string = process.env.TOKEN ?? 'undefined'
const clientId: string = process.env.CLIENT_ID ?? 'undefined'
const guildId: string = process.env.GUILD_ID ?? 'undefined'

const rest = new REST({ version: '9' }).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
