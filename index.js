require("dotenv").config();
const Discord = require("discord.js");
const collectMessages = require('./functions/collectMessages')
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  console.log(`${msg.author.username}(${msg.guild.name}/${msg.channel.name}): ${msg.content}`)
  const guild = msg.guild;
  const channel = msg.channel;
  const author = msg.author;

  // get past 1500 msgs
  let msgs = await collectMessages(msg, 500)
  console.log(msgs.length);
});

client.login(process.env.DISCORD_TOKEN);
