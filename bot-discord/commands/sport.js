const Discord = require('discord.js');
const mySqlConnector = require('../src/mySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, arguments) => {

    mySqlConnector.connect();
    let content = message.content;

    let classement = await mySqlConnector.executeQuery("SELECT * FROM resultat WHERE sport = " + content);
    print(classement)
    await message.channel.send(`Podium Premier : ${classement[0].premier} / Deuxieme : ${classement[0].deuxieme} / Troisieme :${classement[0].deuxieme} `);
};

module.exports.name = 'sport'