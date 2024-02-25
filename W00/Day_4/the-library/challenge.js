const { books }  = require("./books");
function priceOfBook(bookName) { 
   let result = 0
   for (let i = 0; i < books.length; i++) {
      if (books[i].title == bookName) result = books[i].price;
   }

   if (!result) return 'Book not found.';
   return result;
}

function affordableBooks(budget) {
   let affordableBooks = [];
   for (let i = 0; i < books.length; i++) {
      if (books[i].price <= budget) affordableBooks.push(books[i]);
   }
   if (affordableBooks == []) return 'No books found.';
   return affordableBooks;
}

function findBookByGenre(genre) {
   let result = [];
   for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].genres.length; j++) {
         if (books[i].genres[j] == genre) result.push(books[i]);
      }
   }

   if (!result) return 'No books found.';
   return result;
}

function isNotPresent(array, genre)  {
   for ( item of array) {
      // console.log('unique : ', array.join(' ,'), ' current : ', item);
      if(genre == item) return false
   }

   return true;
} 

function groupByGenre() {
   let result = [];
   let uniqueGenres = []; 

   for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].genres.length; j++) {
         if(isNotPresent(uniqueGenres, books[i].genres[j])) {
            let group = findBookByGenre(books[i].genres[j]);
            uniqueGenres.push(books[i].genres[j]);
            // console.log(`/// ${books[i].genres[j]} \n`, group);
            result.push(group);
         }
      }
   }
   // console.log(uniqueGenres);
   if (!result) return 'No books found.';
   return result;
}

function sortBooksByPrice() {
   let array = books;
   let swap;
  do {
    swap = false;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i].price > array[i + 1].price) {
         array.splice(i, 2, array[i + 1], array[i]);
        swap = true;
      }
    }
  } while (swap);
  return array;
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
