require('dotenv').config()
const Discord = require('discord.js')
const MysqlConnector = require('./src/MySqlConnector');
const TOKEN = 'OTkxNjA2NDg2Mjk4MDE3ODMy.GIrlvy._IU1IGFYvEBwlKuWotyYtoBh9JM5F53O5Kq6bc';
const commandLoader = require("./commandLoader")
MysqlConnector.connect();



const client = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS"]
})
commandLoader.load(client);
client.on('messageCreate', async(message) => {

     if (message.content.startsWith("!")){
        let words = message.content.split(' ');
        const nameCommand = words.shift().slice(1);
        const args = words;


        if (client.commands.has(nameCommand)) {
            
            client.commands.get(nameCommand).run(client, message, args);
        } else {
     
            await message.delete();
            await message.channel.send(`The ${nameCommand} does not exist.`);
        }

    }
})
            client.login(TOKEN)

            .then(() => {
                console.log("connexion reussie");
            }).catch(error => {
                console.error(error);
            });
            