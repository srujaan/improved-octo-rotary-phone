"use strict"

// Book constructor function
function Book(title, author, pages='0', isRead='false') {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Books array

let myLibrary = [];

function addToLibrary(newBook) {
    if ( myLibrary.some( (book)=> book.title === newBook.title) ) return false;
    myLibrary.push(newBook);
    return true;
}


//remove from library
function removeFromLibrary(bookTitle) {
    myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
}

// get book from the library
function getBook(bookTitle) {
    for (let book of myLibrary) {
        if (book.title === bookTitle) {
            return book;
        }
    }
    return null;
}

let newBook = new Book('Origin', 'dan brown', 435, true);
console.log(addToLibrary(newBook));
console.log(getBook('Origin'));