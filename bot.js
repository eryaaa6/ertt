const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("654015274642833450")
setInterval(function() {
channel.send(`كل خراكل خراكل خراكل خراكل خراكل خراكل خرا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);