const user = {
    username: "Aniket",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
} // all the variable inside this scope is access thorugh this (current context)

// user.welcomeMessage();
// user.username = "Noob";
// user.welcomeMessage();

// console.log(this); // inside node environment this refers to empty object

// function one (){
//     let username = 'aniket';
//     console.log(this.username); // unable to use this inside a function
// }

// one();

const chai = ()  => {
    let username = "Aniket Chauhan";
    console.log(this.username);
}
// chai();

// const addtwo =  (num1, num2) => {
//     return num1 + num2
// }

// ****************** Implicit Return ***********************
// const addtwo = (num1, num2) => (num1 + num2); // no need of using return keyword anad parenthesis
// Explicit return if parenthesis is used then we have to use return keyword

const addtwo = (num1, num2) => ({username: "Aniket"}); // to use object we have to wrap object inside parenthesis

console.log(addtwo());
