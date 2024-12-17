const {SlashCommandBuilder, UserManager} = require("discord.js");
const {generateChats} = require("./generation");

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName("chat")
        .setDescription("Chat with the bot")
        .addStringOption(
            option=>option.setName("messages")
            .setDescription("your chat message")
            .setRequired(true)
        ),
    async execute(interaction){
        const userMessage = interaction.options.getString('message');
        await interaction.deferReply();
        const botreply = await generateChats(userMessage);
        await interaction.editreply(botreply);
    },
};