import dotenv from 'dotenv'

export default class EnvLoader {
  /**
   * Modified from https://github.com/BUR4KBEY
   * and their Discord bot implementation
   * without their help it would have taken some time
   * to get dotenv stable and loaded multiple times
   *
   * Loads and checks .env file
   */
  static load () {
    dotenv.config({ path: '../.env' })
    this.checkVars(process.env)
  }

  private static checkVars (env: any) {
    if (env.TOKEN === '') throw new Error('Token missing from .env file')
    if (env.CLIENT_ID === '') throw new Error('Client ID missing from .env file')
    if (env.GUILD_ID === '') throw new Error('Guild ID missing from .env file')

    if (env.TOKEN === undefined) throw new Error('Token undefined in .env file')
  }
}
