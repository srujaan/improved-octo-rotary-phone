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