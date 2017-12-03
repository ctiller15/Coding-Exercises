// 3. Write a JavaScript program to get the current date.
var getCurrentDate = () => {
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	return(`${month + 1}/${day}/${year}`);
}

getCurrentDate();