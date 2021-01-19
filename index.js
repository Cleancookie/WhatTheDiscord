require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const grabEmotes = require("./functions/grabEmotes");
const Store = require("./classes/Store");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
    if (msg.content == 'here') {
      grabEmotes(msg)
    }

    if (msg.content == "show") {
      msg.reply(
        [...Store.keys()].reduce((message, emote) => {
          return `${message}, ${emote}`;
        }, "")
      );
    }
});

client.login(process.env.DISCORD_TOKEN);