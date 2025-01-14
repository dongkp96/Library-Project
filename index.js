const library = [];

function book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

book.prototype.addToLibrary = function(library){
    library.push(this);
}
/*Adds a function called addToLibrary to the book.prototype
uses the push method to add to the Array called library and uses the "this" keyword
to add the book object to the library */


const hobbit = new book("The Hobbit", "J.R.R Tolkien", 295, true);

hobbit.addToLibrary(library);


/*for(let i =0; i <library.length; i++){
    alert(library[i]);
}*/

