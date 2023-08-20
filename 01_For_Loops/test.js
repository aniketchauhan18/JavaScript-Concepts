let people = ["Aniket", "Chauhan", "Blabla", "Hello"];

// ****************Traditional For Loops for iteration in array*********************
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }


let obj = {
    name: "Aniket",
    language: "JavaScript",
    hobbies: "Web App Development",
}
// console.log(obj);
// 1.1 Iterating Objects using traditional for loop;
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]]; // object.keys(obj) shows all the content inside obj
//     console.log(element);
// }


// 1.2 Iterating an object using for in loop
for (const key in obj) {
    // console.log(key); // show all the properties of the object like name, language etc
    // console.log(obj[key]); //  show all the values of the object properties
    // console.log(`${key} :- ${obj[key]}`) // Show all both properties and values
}


let object = {
    title: 'Harry Potter',
    anotherObject: {
        Name: 'Noob',
        Experience: 'No Exp!!'
    },
    schooling: 'xyz school'
}

for (const key in object) {
    if (typeof object[key] === 'object') {
        for (const innerKey in object[key]) { // This is to log nested object inside an object
            // console.log(object[key][innerKey])
        }
    } else {
        // console.log(object[key])
    }
    
};

//  1.3 We can use for in loop to loop through each character

const myString = "Aniket Chauhan";

for (const char in myString) {
    // console.log(myString[char]);
}

// ****************For In Loop in Array****************

let array = [
    "Aniket",
    "Chauhan",
    "Nitin",
    "Kapoor"
];
// 1.4 Iterationg an array using for in loop
for (const key in array) {
    // console.log(array[key]);
}

//********************* For Of Loop ******************

let newPeople = [
    "Aniket",
    "Chauhan",
    "Blabla",
    [
        "this is child array",
        "inside parent array"
    ]
];

for (const name of newPeople) {
    if(Array.isArray(name)){  //Array.isArray(name) is used to check whether given value is array or not
        for (const innerName of name) { // to log out nested array also
            // console.log(innerName)
        }
    } else {
        // console.log(name); // will directly log the values of array    
    }
}

let object1 = {
    title: 'Harry Potter',
    anotherObject: {
        Name: 'Noob',
        Experience: 'No Exp!!'
    },
    schooling: 'xyz school'
}

// **************** For In Loop ******************

for (const key in object1) {
    if (typeof object1[key] === 'object'){
        for (const innerkey in object1[key]) {
            console.log(`${innerkey} :- ${object1[key][innerkey]}`)
        }
    } else {
        console.log(`${key} :- ${object1[key]}`)
    }
}

