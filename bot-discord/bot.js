require('dotenv').config()
const Discord = require('discord.js')
const MysqlConnector = require('./src/MySqlConnector');
const TOKEN = '';
const commandLoader = require("./commandLoader")
MysqlConnector.connect();



const bot = new Discord.Client({
    intents:['GUILD_MESSAGES', 'GUILDS']
})




bot.login(TOKEN)

    .then(()=> {
        console.log("connexion reussie");
    }).catch(error=> {
        console.error(error);
    });