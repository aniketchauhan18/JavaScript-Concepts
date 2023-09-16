// ******** Everything inside javascript is a function ******* //

function multiplyBy(num) {
    return num * 5;
}

multiplyBy.power = 2;

console.log(multiplyBy(5));
console.log(multiplyBy.power)
console.log(multiplyBy.prototype);

function createUser (username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function (){
    this.score++  // this = jis
}
createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`) // jis ka matlab this 
}

const noob = new createUser("ani", 10); // using new here to transfer properties to of createUser
const pro = new createUser("no", 250);

noob.printMe();

/*
Here's what happens behind the scenes when the new keyboard is used:

A new object is created : The new keyboard initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype
property of the constructor function. This means it has access to properties and methods
defined on the constructor's protype.

the contructor is called: the constructor function is called with specified
arguments and this is bound to the newly created object.If no explicit return value
is specified from the constructor, JavaScript assumes this. the newly created object,
to be the intented return value.

The new object is returned: After the constructor function has been called,
if it doesn't return a non-primitive value (object, array, function, etc.), the newly
created object is returned

*/ 