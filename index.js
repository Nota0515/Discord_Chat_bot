console.log("bot starting up")
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { TOKEN } = require('./config.json');
const { EventEmitterAsyncResource } = require('node:events');

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });
bot.cooldowns = new Collection();
bot.commands = new Collection();
const folderspath = path.join(__dirname , 'commands');
const commandfolders = fs.readdirSync(folderspath);


for (const folder of commandfolders){
	const commandsPath = path.join(folderspath , folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	for (const file of commandFiles){
		const filepath = path.join(commandsPath , file);
		const command = require(filepath);
		if('data' in command && 'execute' in command){
			bot.commands.set(command.data.name , command);
		} else{
			console.log(`The command at file ${filepath} is missing with data or execute method `);
		}
	}

}

console.log('ye tak chelaaa!!')
const eventpaths = path.join(__dirname , 'events');
const eventfiles = fs.readdirSync(eventpaths).filter(file => file.endsWith('.js'));

for (const file of eventfiles){
	const everyEventpath = path.join(eventpaths , file);
	const event = require(everyEventpath);
	if(event.once){
		bot.once(event.name , (...arg)=> event.execute(...arg));
	}else{
		bot.on(event.name , (...arg)=>event.execute(...arg));
	}

}



bot.login(TOKEN);