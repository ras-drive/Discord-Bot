const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

   if (commandName === 'ping') {
    await interaction.reply('Pong!');
   } else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
   } else if (commandName === 'user') {
    await interaction.reply(`User tag: ${interaction.user.tag}\n User id: ${interaction.user.id}`);
   }
});


client.login(token);


// Bot token: OTIwMTQ3NDkyMjExOTE2ODUx.YbgIIQ.UUzN7P9rT1EKjnExHO2PiEcFiFY
// Invite link: https://discord.com/oauth2/authorize?client_id=920147492211916851&permissions=8&scope=bot%20applications.commands