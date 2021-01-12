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


let ew = new Book('ew','ewr', 342, true);
console.log(addToLibrary('ewre'));
console.log(addToLibrary('ewre'));
console.log(myLibrary);
