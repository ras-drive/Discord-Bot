import { Client, Intents, Collection } from 'discord.js'

/**
 * This class was originally created because of a weird TS error
 * with the regular Client.commands that wouldn't allow me to
 * assign a new collection of the any type. I figured it would
 * just be safer to use my own extended class anyways
 */
export default class BotClient extends Client {
  commands: Collection<unknown, any> = new Collection()
  constructor () {
    super({ intents: [Intents.FLAGS.GUILDS] })
  }
}
