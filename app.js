const a = 5;
const b = 2;
// contst 값은 상수로 저장됨으로 변경되지 않음.
let topValue = '컨텍스트';
//let 값은 초기 선언 이후로 다음선언 까지유지 다음선언부터 변경
console.log(a + b);
console.log('hello' + ' ' + topValue);
// let 값 변경
topValue = '변경값';
console.log('change the value' + ' ' + topValue);

//boolean,null.undifinde값
const amIFat = null;
let something;
console.log(something, amIFat);

//array 사용해서 표현하기
const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';
// array 안을 보고싶으면 [] 열기
const daysOfWeek = [mon, tue, wed, thu, fri, sat];
// Get Item from Array
console.log(daysOfWeek);
// Add one more day to the array
daysOfWeek.push('sun');
console.log(daysOfWeek);

//array 와는 차별된 Object 사용법
const player = {
	name: 'juno',
	point: 10,
	fat: true,
};
console.log(player);
player.fat = false;
console.log(player);
player.firstname = 'tutata';
player.point = player.point + 15;
console.log(player);

//FUNCTION
function sayHello(nameOfPerson, age) {
	console.log(nameOfPerson, age);
}
sayHello('lynn', 14);
sayHello('ken', 15);
sayHello('deen', 15);
//FUNCTION_CAllucurate
function plus(firstNumber, secondNumber) {
	console.log(firstNumber + secondNumber);
}
function divide(a, b) {
	console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name: "nico"
    sayHello: function(otherPersonName){
     console.log("hello");
    }
};

console.log(pla.name);
player.sayHello();




// public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

// view = inflater.inflate(R.layout.weatherdust, container, false);

// dustView = view.findViewById(R.id.dust);
// weatherView = view.findViewById(R.id.weather);
// dustinfoView = view.findViewById(R.id.dustinfo);
// dangerinfoView = view.findViewById(R.id.dangerinfo);
// public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
//     view = inflater.inflate(R.layout.weatherdust, container, false);

//     dustView = view.findViewById(R.id.dust);
//     weatherView=view.findViewById(R.id.weather);
//     dustinfoView = view.findViewById(R.id.dustinfo);
//     dangerinfoView=view.findViewById(R.id.dangerinfo);
