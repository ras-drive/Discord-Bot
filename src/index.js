"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const discord_js_1 = require("discord.js");
// Creates a client instance
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
// Client run status logger
client.once('ready', () => {
    console.log('Ready!');
});
// Logs in with bot's Discord token from dotenv file
client.login(process.env.BOT_TOKEN);
