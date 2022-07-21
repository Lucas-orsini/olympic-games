require('dotenv').config()
const Discord = require('discord.js')
const { GatewayIntentBits } = require('discord.js');
const MysqlConnector = require('./src/MySqlConnector');
const TOKEN = 'OTkxNjA2NDg2Mjk4MDE3ODMy.G3EdBa.AYNd0KgJ7-syAoIpBz2sK1IjBa7Su9Mbd7v4ro';
const commandLoader = require("./commandLoader")
MysqlConnector.connect();



const client = new Discord.Client({
    intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers]
})
commandLoader.load(client);
client.on('create', async(message) => {
     if (message.content.startsWith("!")){
        console.log('yupi')
        let words = message.content.split(' ');
        console.log(words)
        const nameCommand = words.shift().slice(1);
        console.log(nameCommand)
        const args = words;
        console.log(args)

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
            