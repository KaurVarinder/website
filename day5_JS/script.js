let age = 18;

let username1 = 'varinder';
let username2 = 'kaur';


// Topic : Type Collision
let n = username1 + ' ' + username2;
console.log(n);

let a = username1 + 10;
console.log(a);

let b = 10 + username1;
console.log(b);

let c = username1 - 10;
console.log(c);

// How to identify type of a variable
console.log(typeof (age));

// checking equalities
let v1 = 'hello';
let v2 = 'hello';

if (v1 == v2) {
    console.log('yes');
}
else {
    console.log('yes');
}

if (v1 === v2) {
    console.log('yes');
}
else {
    console.log('yes');
}

// Double equal to check for the value. Mostly it is not recommanded to use.
let v3 = '10';
let v4 = 10;

if (v3 == v4) {
    console.log('yes');
}
else {
    console.log('no');
}

// Triple equal to check for the value and the datatype
if (v3 === v4) {
    console.log('yes');
}
else {
    console.log('no');
}

// 
let u1='varinder';
let u2='kaur';

let ans1=u1+' '+u2;
let ans2=`u1+u2`;
let ans3=`${u1} + ${u2}`;

console.log(ans1);
console.log(ans2);
console.log(ans3);

// Functions in JS

// Function Defination with function keyword (Mandatory)
function printHello(x){
    console.log('hello', x);
}

// Function Invocation
printHello('Ajay');

// Function assignment : It works in only JS as it is supported
const pH=function printHi(x){
    console.log('Hi', x);
}

pH('Ajay');

// Anonymous function assignment
const pHi=function (x){
    console.log('Hii', x);
}

pHi('Ajay');

// Arrow function assignment
const pHii= (x) => {
    console.log('Hiii', x);
}

pHi('Ajay');

function sum(a, b){
    const ans=a+b;
    console.log(ans);
}

// let mul = (a, b) =>{
//     const ans=a*b;
//     console.log(ans);
// }
function mul(a, b){
    const ans=a*b;
    console.log(ans);
}

// const mul = (a, b) =>{
//     const ans=a*b;
//     console.log(ans);
// }

sum(a, b);
mul(a, b);

// These following are for preemitive.
// 1.) Difference between arrow and normal function is normal function can give response if function above is written but using arrow with let or const it will do not allow anyone to use function above.

// 2.) There is also differene between using let and const with function assignment. Using const we do not allow any other variable to access that function. So it is important to use const with function assignment.


function sum1(x, y)
{
    if(x===undefined){
        console.log(0);
    }
    else if(x !== undefined){
        console.log(x+y);
    }
    else {
        console.log(x);
    }
}

sum1();
sum1(10);
sum1(10, 20);

function sumNum(a=0, b=0){
    console.log(a+b);
}

sumNum();
sumNum(10);
sumNum(10, 20);

// Objects

const obj1=new Object();
const obj2={};

obj1.name = 'varinder';
obj2.name = 'kaur';

console.log(obj1);
console.log(obj2);

const obj={
    username10: 'Ajay',
    "age": 30,
    10: "ten",
    "city": "jaipur",
    'ten' : 10,
    20 : 200
}

console.log(obj);
console.log(obj.username10);
console.log(obj[20]);

const input = prompt();
console.log(obj[input]);

// Array is a subset of object.

// const arr = new Array();
const arr = ["one", "two", 100];
console.log(arr);
console.log(arr[0]);

// loops

const array = ['fruits', 'apple', 'banana', 'orange'];
for(let i=0;i<4;i++){
    console.log(array[i]);
}


// It will print keys. It use for objects. 
for(let i in array){
    console.log(i)
}

// It will work on array. It use for array
for(let i of array){
    console.log(i)
}


// DOM :- Document Object Model 
console.log(window);
// console.dir(document);

// To access the element of div :
const body = document.getElementsByTagName('p');
console.log(body)

// To change in the div :
const div = document.getElementsByTagName('div');
console.log(div[0]);

div[0].innerText = 'DOM';

const d1 = document.getElementsByClassName('container');
console.dir(d1);
d1[0].style.color =  'blue';
d1[0].style.backgroundColor = "red";

const d2 = document.getElementById('id');
d2.style.color = 'brown';

const d3 = document.querySelector('div p');
d3.style.color = 'pink';
