// let coding = ["js", "ruby", "swift", "python", "cpp"];


// ************ For each Loop **********************

// const values = coding.forEach((langName) => {
//     // console.log(langName);
//     return langName // For Each Loop doesn't return anything
// });

// // console.log(values); // undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    // return num > 4 // Filter keeps the truthy value FKT (Filter Keeps True)
})
console.log(newNums);

const books = [
    {
      "title": "The Enigma Chronicles",
      "author": "Ava Reynolds",
      "genre": "Mystery"
    },
    {
      "title": "Stars and Nebulas",
      "author": "Aniket Chauhan",
      "genre": "Mystery"
    },
    {
      "title": "Whispers in the Woods",
      "author": "Aniket Chauhan",
      "genre": "Fantasy"
    },
    {
      "title": "Silent Echoes",
      "author": "Aniket Chauhan",
      "genre": "Thriller"
    },
    {
      "title": "The Art of Serenity",
      "author": "Isabella Rivera",
      "genre": "Mystery"
    },
    {
      "title": "Echoes of Destiny",
      "author": "Nathan Adams",
      "genre": "Mystery"
    },
    {
      "title": "Quantum Paradox",
      "author": "Sophia Hughes",
      "genre": "Science Fiction"
    },
    {
      "title": "Shadows in the Spotlight",
      "author": "Liam Thompson",
      "genre": "Mystery"
    }
  ]
  

const userBooks = books.filter((book) => book.genre === 'Mystery'); // Filter keeps the truthy value FKT (Filter Keeps True)
// console.log(userBooks);

const newUserBooks = books.filter((book) =>{ return book.genre === "Mystery" && book.author ==="Aniket Chauhan"}); // Filter keeps the truthy value FKT (Filter Keeps True)
// we also have to user return we are using parenthesis {} due to scope
console.log(newUserBooks);