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
    let athletes = await mySqlConnector.executeQuery("SELECT * FROM athletes WHERE id = " + "'" + classement[0].premier + "' OR id = " + "'" + classement[0].deuxieme + "' OR id = " + "'" + classement[0].troisieme + "'")

    await message.channel.send(`Podium Premier : ${athletes[0].nom} (${athletes[0].pays})/ Deuxieme : ${athletes[1].nom} (${athletes[1].pays})/ Troisieme : ${athletes[2].nom} (${athletes[2].pays})`);
   
};

module.exports.name = 'sport'