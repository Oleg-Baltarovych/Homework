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
	try {
		result[i] = showUser(ids[i]);
	} catch (error) {
		console.log(error.name);
		console.log(error.message);
	}
	}
	return result;
}

showUsers([7, -12, 44, 22])
