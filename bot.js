const Discord = require("discord.js");
const prefix = '$' 
const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.login("process.env.BOT_TOKEN");

