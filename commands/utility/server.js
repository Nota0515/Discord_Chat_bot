const {SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('busy')
        .setDescription('info bout the server :)'),
        		// interaction.guild is the object representing the Guild in which the command was run
    async execute(interaction){
        await interaction.reply(`Guild Info ${interaction.guild.name} \n ${interaction.guild.memberCount}`);
    },
};