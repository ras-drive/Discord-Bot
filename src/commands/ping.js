const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with \"Pong!\"'),
    async execute(interaction) {
        throw new Error("invalid interaction");
        await interaction.reply('Pong!');
    }
}