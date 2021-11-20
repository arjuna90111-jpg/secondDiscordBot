require('dotenv').config();

console.clear();

const Client = require("./Structres/Client.js");

const client = new Client();


process.on('unhandledRejection', (err) => {
    console.log('err' + err)
});
   

client.start(process.env.DISCORD_TOKEN);

client.on('messageCreate', message => {

    if (message.content == "Hello") message.reply("Hello~ Nice to meet you.");
});




