const Command = require("../Structres/Command.js");
const Discord = require('discord.js');

module.exports = new Command({
    name: 'vote',
    description: '投票',
    aliases:[],
    permission: "SEND_MESSAGES",

    async run(message, args, client){

        const channel = message.guild.channels.cache.get('channel id here'); //change the channel id to your channel id

        let suggestmessage = args.slice(1).join(' ');

        let suggestembed = new Discord.MessageEmbed()
        .setTitle('討論')
        .setDescription(`${suggestmessage}`)
        .setTimestamp()
        .setFooter(`${message.author.username}`)
        .setColor("RANDOM")
        

        let msg = await message.channel.send({embeds: [suggestembed]});

        msg.react("✅");
        msg.react("❌");


        // let sentembed = new Discord.MessageEmbed()
        // .setTitle('Success')
        // .setDescription(`Succesfully sent the suggestion: ${suggestmessage}`)
        // .setColor('RANDOM')
        // .setTimestamp()
        // .setFooter(`${message.author.username}`);

        // let msg2 = await message.channel.send({embeds: [sentembed]});

        // setTimeout(() => msg2.delete(), 2000);

    }
});