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

function changeStatus(targetID){
    let selector = "#"+targetID;
    const bookImg = document.querySelector(selector);
    if(bookImg.getAttribute("src") ==="imgs/unread-circle.svg"){
        bookImg.setAttribute("src","imgs/circle.svg");
    }else{
        bookImg.setAttribute("src","imgs/unread-circle.svg");
    }
}


function deleteBook(className){
    const container = document.querySelector(".book-container");
    const selector =".book."+className;
    alert(selector);
    const book = document.querySelector(selector);

}

function bookButtons(element, pageClass){
    const container = document.createElement("div");
    container.setAttribute("class", "book-buttons");

    const changeBtn= document.createElement("button");
    changeBtn.setAttribute("type","generic");
    changeBtn.setAttribute("id", "change");
    changeBtn.setAttribute("class", pageClass);
    changeBtn.textContent = "Change Read Status";
    changeBtn.addEventListener("click", function(event){
        changeStatus(event.target.className);
    })
    container.appendChild(changeBtn);

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("type","generic");
    removeBtn.setAttribute("id","remove");
    removeBtn.setAttribute("class", pageClass);
    removeBtn.textContent = "Remove Book";
    removeBtn.addEventListener("click", function(event){
        const selector =".book."+event.target.className;
        const container = document.querySelector(".book-container");
        const book = document.querySelector(selector);
        container.removeChild(book);
    })
    container.appendChild(removeBtn);

    element.appendChild(container);

    /*Function used to add the change read status and remove book buttons to the book display*/
}

function bookToCatalog(book){
    const bookAdded = document.createElement("div");
    const pageClass = "id" + book.id; 
    const bookClass = "book " + pageClass;
    bookAdded.setAttribute("class" , bookClass);
    document.querySelector(".book-container").appendChild(bookAdded);

    const title = document.createElement("h3");
    title.textContent = book.title;
    title.setAttribute("class", book.title);
    bookAdded.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    bookAdded.appendChild(author);

    const pageNumbers = document.createElement("p");
    pageNumbers.textContent = book.pages + " pages";
    bookAdded.appendChild(pageNumbers);

    const indicator = document.createElement("img");
    indicator.setAttribute("id", pageClass);

    if(book.readStatus===true){
        indicator.setAttribute("src", "imgs/circle.svg")
        indicator.setAttribute("alt", "Filled circle logo means user has read this book before")
    }else{
        indicator.setAttribute("src", "imgs/unread-circle.svg")
        indicator.setAttribute("alt", "Empty Circle logo meaning book has not been read")
    }

    bookAdded.appendChild(indicator);

    bookButtons(bookAdded,pageClass);

    book.added = true;

    /*Function used to add the book to the display on website*/
}


/**** 
Functionality area
****/
let counter = 0;

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

    counter++;
    const newbook = new book(title, author, pages, readStatus);
    newbook.id = counter;
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

const changeBtn = document.querySelector("#change.name");
changeBtn.addEventListener("click", function(event){
    changeStatus(event.target.className);
})