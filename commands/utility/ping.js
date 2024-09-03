const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('info about member and guild'),
    async execute(interaction){
        await interaction.reply(`The user is ${interaction.user.username} and about joining acc to me! ${interaction.member.joinAt}`);
    },
};