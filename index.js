const { Client, Intents, MessageEmbed, Message } = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Startup log
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', () => {
    if(message.content === "ping") {
        message.channel.send("Pong!")
    }
})

client.login(token)