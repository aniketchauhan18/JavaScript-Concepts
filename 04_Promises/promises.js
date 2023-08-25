// How to create promises //
const promiseOne = new Promise(function(resolve, reject){
    //Do an async part
    //DB calls, cryptography, network 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve(); // now this connected to dot then
    }, 1000)
});

// HOW TO CONSUME PROMISES
// Dot then has a direct connection with resolve
promiseOne.then(function(){
    console.log("Promise Consumed"); // promise consumed will not come first, first it get resolve this will consumed
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000) // because we haven't store this on an vairable then we can directly call then
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: 'Chai', email: 'dvvdhsv@dd.com'});
    },1000);

})

promiseThree.then(function(user){ // anything written inside resolve will pass here
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: 'Aniket', password: 1234})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
});

promiseFour
.then((user) => {
    console.log(user);
    return user.userName // the value from this dot then will return to lower then 
}).then((username) => { // used in database connection
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("Finally the promsise is either resolved or rejected")) // using finally to tell whether the required work is done or not