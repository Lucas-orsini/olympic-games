require('dotenv').config()
const Discord = require('discord.js')
const { Client, GatewayIntentBits } = require('discord.js');
const MysqlConnector = require('./src/MySqlConnector');
const TOKEN = 'OTkxNjA2NDg2Mjk4MDE3ODMy.GftPK8.KJNvYbk1raKgCfQtNS4DGYZPRt0X64Dsfv8Q_Y';
const commandLoader = require("./commandLoader")
MysqlConnector.connect();



const bot = new Discord.Client({
    intents: [   GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages]
})
commandLoader.load(bot);
bot.on('messageCreate', async(message) => {
 


    if (message.content.startsWith("!")) {
        let words = message.content.split(' ');
        const commandName = words.shift().slice(1);
        const arguments = words;

        if (bot.commands.has(commandName)) {
        
            bot.commands.get(commandName).run(bot, message, arguments);
        } else {
           
            await message.delete();
            await message.channel.send(`The ${commandName} command does not exist.`);
        }

    }


})
            bot.login(TOKEN)

            .then(() => {
                console.log("connexion reussie");
            }).catch(error => {
                console.error(error);
            });
            