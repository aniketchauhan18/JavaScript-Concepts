// let coding = ["js", "ruby", "swift", "python", "cpp"];


// ************ For each Loop **********************

// const values = coding.forEach((langName) => {
//     // console.log(langName);
//     return langName // For Each Loop doesn't return anything
// });

// // console.log(values); // undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return num > 4
})
console.log(newNums);