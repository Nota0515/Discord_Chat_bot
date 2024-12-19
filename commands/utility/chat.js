const {SlashCommandBuilder,} = require("discord.js");
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
        try{
            const userMessage = interaction.options.getString('messages');
            await interaction.deferReply();
            const botreply = await generateChats(userMessage);
            await interaction.editReply(botreply);
        }catch(e){
            console.error("kuch toh gedbad hai deya !");
            await interaction.editReply("There was a problem with something")
        }
    },
};