const Store = require("../classes/Store");

/**
 * @param {{import('discord.js').Message}} msg
 */
module.exports = async (msg) => {
  let oldestMsg = msg;

  try {
    // loop through all the msgs, change this to loop through more history.  If you loop through too much it will error
    for (let i = 0; i < 1; i++) {

    const messages = await msg.channel.messages.fetch(
        {
            limit: 10,
            before: oldestMsg.id,
        },
        false,
        true
      );
      oldestMsg = messages.last();
      messages.each((message) => {
        let emotes = message.content.match(
          /(:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>)/g
        );

        if (emotes !== null) {
          emotes.reduce((Store, emote) => {
            let count = Store.has(emote) ? Store.has(emote) : 0;
            Store.set(emote, count + 1);
            return Store;
          }, Store);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }

  console.log(Store);
};
