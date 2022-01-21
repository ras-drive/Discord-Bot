import dotenv from 'dotenv'
import { Choices } from './util/EnvChoices'

export default class EnvLoader {
  /**
   * Modified from https://github.com/BUR4KBEY
   * and their Discord bot implementation
   * without their help it would have taken some time
   * to get dotenv stable and loaded multiple times
   *
   * Loads and checks .env file
   */
  static load (varsNeeded: Choices) {
    dotenv.config({ path: '../.env' })

    switch (varsNeeded) {
      case Choices.BOT:
        this.checkBotVars(process.env)
        break
      case Choices.CRYPTO:
        this.checkCryptoVars(process.env)
        break
    }
  }

  private static checkBotVars (env: any) {
    if (env.TOKEN === '') throw new Error('Token missing from .env file')
    if (env.CLIENT_ID === '') throw new Error('Client ID missing from .env file')
    if (env.GUILD_ID === '') throw new Error('Guild ID missing from .env file')

    if (env.TOKEN === undefined) throw new Error('Token undefined in .env file')
  }

  private static checkCryptoVars (env: any) {
    if (env.CRYPTO_TOKEN === '') throw new Error('Crypto API token missing from .env file')
  }
}
