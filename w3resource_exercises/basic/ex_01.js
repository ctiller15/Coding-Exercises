/*
1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var displayCurrentDay = () => {
	var rightNow = new Date();
	var day = rightNow.getDay();
	var h = rightNow.getHours();
	var m = rightNow.getMinutes();
	var s = rightNow.getSeconds();
	return (`Today is : ${days[day]}.\n Current time is : ${h > 11 ? (h%12) + " PM" : h + " AM"} : ${m} : ${s}`);
}

displayCurrentDay();