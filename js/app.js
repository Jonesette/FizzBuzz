$(document).ready(function() {
	var results = [];

	for (var i=1; i<101; i++) {
		if (i%15 === 0) {
			results.push("FizzBuzz");
		}
		else if (i%3 === 0) {
			results.push("Fizz");
		}
		else if (i%5 === 0) {
			results.push("Buzz");
		}
		else {
			results.push(i);
		}

	}

$("#solution").append('<p>'+results+'</p>');
	
});