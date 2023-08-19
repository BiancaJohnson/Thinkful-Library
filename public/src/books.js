function findAuthorById(authors, id) {
    // find each account in the array 
  const findAuthorId = authors.find((author) => { 
    // return matiching account id
    return author.id === id;
  });
  return findAuthorId;
  }

// helper function to see if ids match 
function helperFunction(book, id) {
  return book.id === id;}

function findBookById(books, id) {
     // use helper function to find the matching ids 
  const findBookId = books.find((book) => helperFunction(book, id));
    // return matching account id
    return findBookId; 
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
