const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('hi')
        .setDescription('info about the Bot itself'),
    async execute(interaction){
        await interaction.reply(`\`\`\`
Hi there ${interaction.user.username},
It's me Akrithi, your personal friend whom you can talk to,
😊about anything without hesitation.
Feel free to message me 💖
\`\`\``);
    },
};