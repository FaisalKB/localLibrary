// greetings! I'll be explaining my code throughout the functions via comments. I will also be using comment page-breaks for better readability.

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}
// very easy; we just use find method to locate an account where the account id matches the argument

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function sortAccountsByLastName(accounts) {
  return accounts.sort((nameOne, nameTwo) =>
    nameOne.name.last.toLowerCase() > nameTwo.name.last.toLowerCase() ? 1 : -1
  );
}
//also another easy function, we add lowercase to the names to make sure they all have the same "value" and then sort them. I used a ternary operator here to demonstrate understanding of it, despite more efficient ways to sort :)

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function getTotalNumberOfBorrows(account, books) {
  return books.filter((book) =>
    book.borrows.find((borrow) => borrow.id === account.id)
  ).length;
}
// all I'm doing here is filtering to create an array of books that meet my find method's criteria, which is to check that the borrower's id matches the borrow id on the book! I then return the length to get a number of books borrowed

//-----------------------------------------------------------------------------------------------------------------------------------------------//
function getBooksPossessedByAccount(account, books, authors) {
  //I'm personally most proud of figuring this one out!!
  const booksCheckedOut = books.filter(
    (book) =>
      book.borrows.find(
        (borrow) => borrow.returned === false && borrow.id === account.id
      ) //I started by filtering to create an array of books that were both checked out AND where the borrow id matches the account's id
  );
  booksCheckedOut.forEach(
    (book) =>
      (book.author = authors.find((author) => author.id === book.authorId))
  ); //I then loop through my new array and add the author element, and I find the author using the find method to locate an author who's id matches the book's author id

  return booksCheckedOut; //finally I return the array that houses my books, that are checked out by a particular user, with the author "embedded" in the object
}
//all done with this page! Now format using prettier.js and off to github!
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
