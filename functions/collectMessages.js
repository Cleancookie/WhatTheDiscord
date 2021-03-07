const Discord = require('discord.js');
require('dotenv');

/**
 *
 * @param {Discord.Message} triggeringMsg
 * @param {number} limit
 * @returns
 */
module.exports = async function (triggeringMsg, limit = 500) {
	const channel = triggeringMsg.channel;
	let msgs = [];
	let lastId = null;

	while (true) {
		let thisRoundsLimit = (msgs.length + 100 > limit) ? limit % 100 : 100;
		
		let theseMsgs = await channel.messages.fetch({
			limit: thisRoundsLimit,
			before: lastId,
		});
		msgs = [...msgs, ...theseMsgs.values()];

		if (msgs.length >= limit || theseMsgs.array().length === 0) {
			break;
		}

		lastId = theseMsgs.last().id;
	}

	return msgs;
};
