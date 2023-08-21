
// ************************Mapping In JS**************************
const myNums = [1,2,3,4,5,6,7,8,9,10];

const addedNum =  myNums.map((num) => { return num + 10 }).filter((num) => num >= 18);
console.log(addedNum); // we also have to user return we are using parenthesis {} due to scope