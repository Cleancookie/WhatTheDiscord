const Store = require("../classes/Store");

/**
 * @param {{import('discord.js').Message}} msg 
 */
module.exports = async (msg) => {
    return msg.reply(
        [...Store.keys()].reduce((message, emote) => {
            return `${message}, ${emote}`;
        }, "")
    );
};
