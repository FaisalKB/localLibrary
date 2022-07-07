// greetings! I'll be explaining my code throughout the functions via comments. I will also be using comment page-breaks for better readability.

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function getTotalBooksCount(books) {
  return books.length;
}
// simple enough; the function returns how many book objects are within the book array.

//----------------------------------------------------------------------------------------------------------------------------------------------//
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
// simple enough, the function returns how many account objects are within the accounts array.

//----------------------------------------------------------------------------------------------------------------------------------------------//
function getBooksBorrowedCount(books) {
  return books.filter((book) =>
    book.borrows.find((borrow) => borrow.returned === false)
  ).length;
}
/* Here I am using filter to create an array of books that meet the criteria I set using the find method, which helps locate a "false" return for the
borrows array within the object. Since a borrowed book can only have one "false" value, this is sufficient. I then return the array's length, resulting 
in a number of books borrowed. */

//----------------------------------------------------------------------------------------------------------------------------------------------//
function helperFunction(books) {
  // our first helper function! I'll break this down line by line
  let item = {}; //establishing an empty object
  books.forEach((book) => {
    // .forEach will loop through my books array
    if (item[book.genre] != null) {
      // this conditional checks to see if my item indexed at a specific genre exists (not null)
      item[book.genre]++; // if it does exist, we increment it, or increase it by one!
    } else {
      //
      item[book.genre] = 1;
    } //otherwise, we establish the item and set the value to one.
  }); //
  return item; //result? an item object with the "key" of the genre, and the value of the number of times it occured!
}

//----------------------------------------------------------------------------------------------------------------------------------------------//
function getMostCommonGenres(books) {
  //This was by far the hardest function!
  let helper = helperFunction(books); //We start by invoking our helper function, this will be used later
  const result = []; //Now's a great time to create our empty array, which will house the final product!
  for (const [key, value] of Object.entries(helper)) {
    // this for/of loop loops through our item(s) from the helper function, turning the result
    result.push({
      // into an object where the genre becomes a value for the name key, and the coutn becomes a value for the count key
      name: key, // now we just push the objects into our empty array
      count: value,
    });
  }
  result.sort((genreA, genreB) => genreB.count - genreA.count); // this will sort it by highest first
  return result.slice(0, 5); // slice will return a portion of the array, starting at index 0 (first item) and stopping/excluding index 5 (6th item)
}

//----------------------------------------------------------------------------------------------------------------------------------------------//
function getMostPopularBooks(books) {
  const popBooks = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  })); // I use map here to manipulate existing data within the dataset, to create objects where the name is the title and the count is how many times it was borrowed

  return popBooks.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5); // all we have to do now is sort in descending order, and add slice to the return value to get our top 5!
}

//----------------------------------------------------------------------------------------------------------------------------------------------//
function getMostPopularAuthors(books, authors) {
  const result = []; //start with an empty array, which will house our final result
  authors.forEach((author) => {
    // loop through authors array
    let authorStats = {
      name: `${author.name.first} ${author.name.last}`, // we're now creating our author object that houses our author's name and a counter for them
      count: 0,
    };

    books.forEach((book) => {
      //having finished the author stuff, we now must loop through books in our books array, locating books that match our author's id, and adding the borrows array's length to that author's counter
      if (book.authorId === author.id) {
        authorStats.count += book.borrows.length;
      }
    });
    result.push(authorStats); // once added, we push the final author object into the result array
  });
  return result
    .sort((authorA, authorB) => authorB.count - authorA.count)
    .slice(0, 5); //sort and slice and return!
}
//all done with this page! Now format using prettier.js and off to github!
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
