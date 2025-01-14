const library = [];

/****
 Function and Constructors area
 ****/
function book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.added = false;
    /*constructor for book object*/
}

book.prototype.addToLibrary = function(library){
    library.push(this);

    /*Adds a function called addToLibrary to the book.prototype
    uses the push method to add to the Array called library and uses the "this" keyword
    to add the book object to the library */
}


function bookButtons(element){
    const container = document.createElement("div");
    container.setAttribute("class", "book-buttons");

    const changeBtn= document.createElement("button");
    changeBtn.setAttribute("type","generic");
    changeBtn.setAttribute("id", "change");
    changeBtn.textContent = "Change Read Status";
    container.appendChild(changeBtn);

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("type","generic");
    removeBtn.setAttribute("id","remove");
    removeBtn.textContent = "Remove Book";
    container.appendChild(removeBtn);

    element.appendChild(container);

    /*Function used to add the change read status and remove book buttons to the book display*/
}

function bookToCatalog(book){
    const bookAdded = document.createElement("div");
    bookAdded.setAttribute("class" , "book")
    document.querySelector(".book-container").appendChild(bookAdded);

    const title = document.createElement("h3");
    title.textContent = book.title;
    bookAdded.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    bookAdded.appendChild(author);

    const pageNumbers = document.createElement("p");
    pageNumbers.textContent = book.pages + " pages";
    bookAdded.appendChild(pageNumbers);

    const indicator = document.createElement("img");

    if(book.readStatus===true){
        indicator.setAttribute("src", "imgs/circle.svg")
        indicator.setAttribute("alt", "Filled circle logo means user has read this book before")
    }else{
        indicator.setAttribute("src", "imgs/unread-circle.svg")
        indicator.setAttribute("alt", "Empty Circle logo meaning book has not been read")
    }

    indicator.setAttribute("id", book.pages);
    bookAdded.appendChild(indicator);

    bookButtons(bookAdded);

    book.added = true;

    /*Function used to add the book to the display on website*/
}

/*Adds a function called addToLibrary to the book.prototype
uses the push method to add to the Array called library and uses the "this" keyword
to add the book object to the library */


const hobbit = new book("The Hobbit", "J.R.R Tolkien", 295, true);
hobbit.addToLibrary(library);


/*for(let i =0; i <library.length; i++){
    alert(library[i]);
}*/

/**** 
Functionality area
****/


const addBtn= document.querySelector("#add");
addBtn.addEventListener("click", function(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let hasRead = document.querySelector("#read").value.toLowerCase();
    let readStatus =false;
    if(hasRead === "yes"){
        readStatus = true;
    }

    const newbook = new book(title, author, pages, readStatus);
    newbook.addToLibrary(library);

    for(let i =0; i <library.length; i++){
        if (library[i].added === false ){
            bookToCatalog(library[i]);
        }
    }

})

/****
Creation area
****/
