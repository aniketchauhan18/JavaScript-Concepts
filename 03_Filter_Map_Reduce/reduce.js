// ************************Reduce*************************

const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function(acc, currval){
//     //console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0);
// // console.log(myTotal);

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 ) // acc = accumulator , curr = currentValue
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Js Course',
        price: 2999,
    },
    {
        itemName: 'py Course',
        price: 6999,
    },
    {
        itemName: 'DS Course',
        price: 9999,
    },
    {
        itemName: 'web dev Course',
        price: 1999,
    },
    {
        itemName: 'app dev Course',
        price: 12999,
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0); // use in shoping cart to add the prices
console.log(totalPrice);