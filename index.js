require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
let store = [];

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
    console.log("yere");

    let oldestMsg = msg;
    try {
        for (let i = 0; i < 1; i++) {
          const messages = await msg.channel.messages.fetch({
            limit: 100,
            before: oldestMsg.id,
          }, true, true);
          oldestMsg = messages.last();
          messages.each((message) => {
            console.log(message.content.match("^(:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>)+$");
            store.push(message.content);
          });
        }
    } catch (err) {
        console.log (err)
    }
    // console.log(store);
});

client.login(process.env.DISCORD_TOKEN);
