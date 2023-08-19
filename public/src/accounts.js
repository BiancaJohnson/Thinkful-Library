function findAccountById(accounts, id) {
  // find each author in the array 
  const matchingId = accounts.find((account) => { 
    // return matiching id
    return account.id === id;
  });
  return matchingId;
  
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
}

function sortAccountsByLastName(accounts) {
 // create new array using filter
   const lastNames = accounts.filter((account) => true)
  //compare last names and sort accounts
  lastNames.sort(function (a, b) {
  if (a.name.last < b.name.last) {
    return -1; 
  }
  if (a.name.last > b.name.last) {
    return 1;
  }
  return 0;
});
return lastNames;
 
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
}

function getAccountFullNames(accounts) {
    // create new array
 let fullNames = [];
     // use map() to loop through each account
   fullNames = accounts.map(function(account) {
   // for each account return first and last name
  return account.name.first + " " + account.name.last;
  });
return fullNames;
 }
  
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
