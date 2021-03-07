/**
 * 
 * @param {array} collection
 * @param {string} keyToCount 
 */
module.exports = async function(collection, keyToCount) {
	let tally = {};

	tally = collection.reduce((tally, current, index) => {
		const key = current[keyToCount];

		if (tally[key] === undefined) {
			tally[key] = 0;
		}

		tally[key]++

		return tally;
	}, tally);

	return tally;
}
