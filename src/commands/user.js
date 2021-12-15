const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user information'),
    async execute(interaction) {
        await interaction.reply(`User name: ${(interaction.user.tag).slice(0, -5)}\n` +
                                `User created at: ${interaction.user.createdAt.toDateString()}\n`);
    }
}