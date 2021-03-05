const Discord = require('discord.js');

/**
 * 
 * @param {Discord.Message} triggeringMsg 
 * @param {number} limit 
 * @returns 
 */
const collectMessages = async function(triggeringMsg, limit = 500) {
    const channel = triggeringMsg.channel;
    let msgs = [];
    let lastId = null;

    while (true) {
        let theseMsgs = await channel.messages.fetch({limit: 100, before: lastId});
        msgs = [...msgs, ...theseMsgs.values()];

        // console.log(
        //     `Count: ${theseMsgs.array().length} / total: ${msgs.length}`
        // )
        if (msgs.length >= limit || theseMsgs.array().length === 0) {
            break;
        }

        lastId = theseMsgs.last().id;
    }

    return msgs;
}

module.exports = collectMessages;