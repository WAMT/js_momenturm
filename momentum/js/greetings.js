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

//------------------------------------------------------------------

// const age = parseInt(prompt('How old are you?'));

// if (isNaN(age) || age < 0) {
// 	alert('plz write a real positive number');
// } else if (age < 18) {
// 	alert('You are too young');
// } else if (age >= 18 && age <= 50) {
// 	alert('You can drink');
// } else if (age > 50 && age <= 80) {
// 	alert('you should exercise');
// } else if (age == 100) {
// 	alert('wow your wise');
// } else if (age > 80) {
// 	alert('You can do whatever you want');
// } else {
// 	alert('You can drink');
// }

// if(isNaN(age) || age < 0){
// 	alert("plze");
// } else if (age < 19 || age >120 ){
// 	alert("you ca");
// } else if (age <)

//------------------------------------------------------------------

// const h1 = document.querySelector('.hello h1');

// const mouseClickEvent = () => {
// 	h1.style.color = 'blue';
// };
// function windowCopyEvent() {
// 	h1.style.color = 'red';
// 	alert("don't copy that!!");
// }
// const mouseenterEvent = () => {
// 	h1.innerText = 'mouse is here';
// };
// const mouseleaveEvent = () => {
// 	h1.innerText = 'mouse is gone';
// };
// const windowResizeEvent = () => {
// 	document.body.style.backgroundColor = 'tomato';
// };
// const windowoffEvent = () => {
// 	alert('window out T T');
// };
// const windowonlEvent = () => {
// 	alert('window on !!');
// };
// h1.addEventListener('click', mouseClickEvent);
// h1.addEventListener('mouseenter', mouseenterEvent);
// h1.addEventListener('mouseleave', mouseleaveEvent);
// window.addEventListener('resize', windowResizeEvent);
// window.addEventListener('copy', windowCopyEvent);
// window.addEventListener('offline', windowoffEvent);
// window.addEventListener('online', windowonlEvent);

// h1.innerText = 'Grab me~';
// alert(h1.innerText);
// alert(h1.className);
// h1.innerText = 'Got You!';
// alert(h1.innerText);

//------------------------------------------------------------------

// const h1 = document.querySelector('.hello h1');

// const clickEvent = () => {
// 	const A = h1.style.color;
// 	if (A == 'blue') {
// 		B = 'tomato';
// 	} else if (A == 'tomato') {
// 		B = 'yellow';
// 	} else {
// 		B = 'blue';
// 	}
// 	h1.style.color = B;
// };

// h1.addEventListener('click', clickEvent);

//------------------------------------------------------------------

// const h1 = document.querySelector('.hello h1');

// const clickEvent = () => {
// 	h1.classList.toggle('clicked');
// };

// h1.addEventListener('click', clickEvent);

// const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('input');
const loginh1 = document.querySelector('#h1text');

const HIDE = 'hidden';
const USER = 'user';

const submitValue = (event) => {
	event.preventDefault();
	loginForm.classList.add(HIDE);
	const username = loginInput.value;
	localStorage.setItem(USER, username);
	devUser(username);
};

const devUser = (username) => {
	loginh1.innerText = 'HELLO ' + username;
	loginh1.classList.remove(HIDE);
};

const SavedUserName = localStorage.getItem(USER);

if (SavedUserName == null) {
	loginForm.classList.remove(HIDE);
	loginForm.addEventListener('submit', submitValue);
} else {
	devUser(SavedUserName);
}
