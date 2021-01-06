// Constructor function for book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    // method for completed reading the book or still reading
    this.info = function() {
        if (read === true) {
            return `${title} by ${author}, ${pages} pages, done reading`
        }
        else {
            return `${title} by ${author}, ${pages}, not read yet`
        }
    }
}


let theHobbit = new Book("The Hobbit", "J.R.R.Tolkien", 295, true);
let juliusCasear = new Book("Julius Casear", "Phillip Freeman", 404, false);
console.log(theHobbit)