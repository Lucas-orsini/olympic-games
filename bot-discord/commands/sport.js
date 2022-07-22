const Discord = require('discord.js');
const mySqlConnector = require('../src/MySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, args) => {

    let content = message.content;
    let newContent = content.split(" ")
    newContent.shift()
    let sport = newContent


    let classement = await mySqlConnector.executeQuery("SELECT * FROM resultat WHERE sport = " + "'" + sport + "'");
    console.log(classement)
    await message.channel.send(`Podium Premier : ${classement[0].premier} / Deuxieme : ${classement[0].deuxieme} / Troisieme :${classement[0].deuxieme} `);
   
};

module.exports.name = 'sport'