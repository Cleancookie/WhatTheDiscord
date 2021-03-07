const Discord = require('discord.js')

/**
 * 
 * @param {Array<Discord.Message>} msgs 
 */
module.exports = async function(msgs) {
	const regex = '<:(.[^:]*):{1}([0-9]{18})>';
    let allMatches = msgs.reduce((carry, msg, i) => {
		let matchesThisMsg = msg.content.matchAll(regex);
		return [...carry, ...matchesThisMsg];
	}, []);

    // reformat to be objs
    allMatches = allMatches.map((match) => {
		return {
			emoji: match[1],
			id: match[2],
		};
	});

    return allMatches;
}
