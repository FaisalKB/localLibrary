// greetings! I'll be explaining my code throughout the functions via comments. I will also be using comment page-breaks for better readability.

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
// easy function; all I'm doing is finding an author by comparing the author's id to the argument

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}
// easy function, similar to the above, I'm finding a book by comparing the book's id to the argument

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function partitionBooksByBorrowedStatus(books) {
  //This is a cool function, I start off by creating 2 variables that give me 2 arrays.
  const borrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  ); // this uses some, because I just need to locate 1 instance of false to determine the book is checked out
  const returned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  ); // this uses every, because if every instance of borrow.returned is true, the book was returned (or maybe never checked out? ha ha ha)
  const result = [[...borrowed], [...returned]]; //Now all I do is combine those 2 arrays within a return value array and return it!
  return result;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function getBorrowersForBook({ borrows }, accounts) {
  //I started off by destructuring borrows, since that's the only information I'm accessing in the books array within this function.
  return borrows
    .map((borrow) => {
      //map function here will go through my individual borrow objects within borrow and map will create an array for me that includes my new objects that I make using it
      const account = accounts.find((account) => account.id === borrow.id); //I establish an account variable here that basically allows me to locate accounts that have an account id that matches the borrow id within the borrow objects
      return { ...account, ...borrow };
    })
    .slice(0, 10); //i finally return an array of objects that combines the account and borrow information into a singular object, and limits array to 10 total objects.
}
//all done with this page! Now format using prettier.js and off to github!
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
