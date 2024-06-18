console.log('working....')

// Decalaration
var age;

//Assignament / initialization
age=18;
console.log(age);

// re-assignment
age=19;
console.log(age);

// re-delaration
var age =20;
console.log(age);

function abc()
{
    var username='varinder';
    console.log(age);
}

abc();

// console.log(username);

// var : It is oldest variable. The scope is functional. If use var and value is not given  or before declaration then it is undefined bydefault.

// let username='varinder';
// console.log(username);

// in case of let it can not be redeclare
// it is block scope

{
    let age=180;
    console.log(age);
}


//