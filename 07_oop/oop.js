// Factory function used to create and return object
// Object.create

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf (name, weapon) {
    let newElf = Object.create(elfFunctions)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones');
// console.log(peter.attack());
const sam = createElf('Sam', 'fire');
// console.log(sam.attack());

// Constructor Functions 

function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// const aniket = new Elf('Aniket', 'stones'); // adding new means we are attachiong this variable to it
// with the help of this keyword this here doesn't refers to window object
// console.log(aniket.weapon);

Elf.prototype.attack = function () {
    return 'attack with ' + this.weapon
}

const Elf1 = new Function ('name', 'weapon', `this.name = name; this.weapon = weapon`)
const sarah = new Elf('Sarah', 'fireworks');
console.log(sarah.attack());