function showUser(id) {
	let result = {id: id};
	if (id < 0) {
		throw new Error("ID must not be negative: " + id);
	}
	return result;
}
function showUsers(ids) {
	let result = [];
	for (let i = 0; i < ids.length; i++) {
	result[i] = showUser(ids[i]);
	}
	return result;
}
try {
	showUsers([7, -12, 44, 22]);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}
