function orderByProps(object, Array) {
	const entries = Object.entries(object)
	entries.sort(function (a, b) {
		for (const element in Array) {
			if (Array[element] === a || Array[element] === b) {
				return 1
			}
			if (a > b) {
				return 1
			}
			if (a < b) {
				return -1
			}
			return 0
		}
	});
	console.log(entries);
	let sortedPropsArray = [];
	for (const element in entries) {
		sortedPropsArray.push({ 'key': entries[element][0], 'value': entries[element][1] })
	}
	
	// for (const prop in object) {
	// 	sortedPropsArray.push({ 'key': prop, 'value': object[prop] })
	// 	console.log()
	// }
	return sortedPropsArray;
};

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
console.log(orderByProps(obj, ['health', 'attack']));

