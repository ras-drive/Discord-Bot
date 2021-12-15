const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../config.json');
const logger = require('./utils/logger');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the collection with the name and exported module
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return
    
    try {
        await command.execute(interaction);
    } catch (e) {
        console.error(e + '\nAn error has occurred while executing the command and has been inserted into the logs.');
        logger.error(e.stack);
        logger.info(`Error executing command: ${interaction.commandName}`);
        await interaction.reply({ content: 'There was an error while executing the command!', ephemeral: true});
    }
});


client.login(token);
