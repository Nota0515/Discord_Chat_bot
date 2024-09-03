const {Events} = require('discord.js');
const { execute } = require('./ready');

module.exports = {
    name:Events.InteractionCreate,
    async execute(interaction){
        if(!interaction.isChatInputCommand()) return;
        if (!interaction || !interaction.commandName) {
            console.error('Invalid interaction or command name');
            return;
        }
        
        const command = interaction.client.commands.get(interaction.commandName);

        if(!command){
            console.error(`Not found Any command in the collection ${interaction.commandName}`);
            return ;
        }
        try{
            await command.execute(interaction);
        }catch(error){
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }


    },
};