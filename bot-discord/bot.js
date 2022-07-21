require('dotenv').config()
const Discord = require('discord.js')
const { GatewayIntentBits } = require('discord.js');
const MysqlConnector = require('./src/MySqlConnector');
const TOKEN = 'OTkxNjA2NDg2Mjk4MDE3ODMy.GYd8yH.n3Ol0S11c1jqM7Rn-jL--A3om071h_QN9dcK9Q';
const commandLoader = require("./commandLoader")
MysqlConnector.connect();



const bot = new Discord.Client({
    intents: [   GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers]
})
commandLoader.load(bot);
bot.on('create', async(message) => {
     if (message.content.startsWith("!")){
        console.log('yupi')
        let words = message.content.split(' ');
        console.log(words)
        const nameCommand = words.shift().slice(1);
        console.log(nameCommand)
        const args = words;
        console.log(args)

        if (bot.commands.has(nameCommand)) {
            
            bot.commands.get(nameCommand).run(bot, message, args);
        } else {
     
            await message.delete();
            await message.channel.send(`The ${nameCommand} does not exist.`);
        }

    }
})
            bot.login(TOKEN)

            .then(() => {
                console.log("connexion reussie");
            }).catch(error => {
                console.error(error);
            });
            