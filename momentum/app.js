// const calculator = {
// 	add: function (a, b) {
// 		return a + b;
// 	},
// 	sub: function (a, b) {
// 		return a - b;
// 	},
// 	div: function (a, b) {
// 		return a / b;
// 	},
// 	do: function (a, b) {
// 		return a * b;
// 	},
// 	zex: function (a, b) {
// 		return a ** b;
// 	},
// };
// const plusResult = calculator.add(2, 3);
// const minusResult = calculator.sub(plusResult, 10);
// const timeseResult = calculator.div(10, minusResult);
// const divideResult = calculator.do(timeseResult, plusResult);
// const powerResult = calculator.zex(divideResult, minusResult);

const age = parseInt(prompt('How old are you?'));

if (isNaN(age) || age < 0) {
	alert('plz write a real positive number');
} else if (age < 18) {
	alert('You are too young');
} else if (age >= 18 && age <= 50) {
	alert('You can drink');
} else if (age > 50 && age <= 80) {
	alert('you should exercise');
} else if (age > 80) {
	alert('You can do whatever you want');
} else {
	alert('You can drink');
}
