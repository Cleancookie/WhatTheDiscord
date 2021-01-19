require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const grabEmotes = require('./functions/grabEmotes')
const replyStats = require('./functions/replyStats')

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
    if (msg.content == 'here') {
      grabEmotes(msg)
    }

    if (msg.content == "show") {
      replyStats(msg)
    }
});

client.login(process.env.DISCORD_TOKEN);