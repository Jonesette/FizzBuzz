$(document).ready(function() {
	var results = [];

	var numAlert = function () {
		alert("The Value Must be Less than 200 and Numerical!!");	
	};

	var endNumber = +prompt("Please Enter a Numerical Value Less than 200.");

	while (endNumber > 200) {
		numAlert();
		endNumber = +prompt("Please Enter a Numerical Value Less than 200.");
	}

	while (endNumber === NaN) {
		numAlert();
		endNumber = +prompt("Please Enter a Numerical Value Less than 200.");
	}


	for (var i=1; i<endNumber; i++) {
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