// let name = "Aniket    ";

// console.log(name.trim().length);

let myHero = ["ironman", "spiderman"];

let heroPower = {
    ironman: "iq",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.aniket = function() {
    console.log(`Aniket is present in all objects`)
}

Array.prototype.heyAniket = function () {
    console.log(`Aniket say hello`)
}

// heroPower.aniket();
// myHero.aniket();
// myHero.heyAniket();
// heroPower.heyAniket(); // object doesn't have the power of the

const User = {
    name: "nooo",
    email: "nooooo@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// **********************MODERN SYNTAX*********************
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Aniket Chauhan   ";

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

"Noobde  ".trueLength(); // this = "Noobde";
anotherUsername.trueLength(); // this = anotherUsername;
"asfdsvsdv          ".trueLength();