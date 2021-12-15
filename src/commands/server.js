const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server info'),
    async execute(interaction) {
        await interaction.reply(`Server name: ${interaction.guild.name}\n` +
                                `Server creation date: ${interaction.guild.createdAt.toDateString()}\n` +
                                `Total server members: ${interaction.guild.memberCount}\n` +
                                `Verified: ${interaction.guild.verified}\n`);
    }
}