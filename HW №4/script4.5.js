function showUser(id) {
	if (id < 0) {
		throw new Error("ID не може бути від'ємним: " + id);
	}
	let result = {id: id};
	return result;
}
function showUsers(ids) {
	let result = [];
	for (let i = 0; i < ids.length; i++) {
	result[i] = {id: showUser(ids[i])};
	}
	return result;
}
try {
	result = showUsers([20, -12, 30, 76]);
	console.log(result);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}