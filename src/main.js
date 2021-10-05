let myLibrary = [];

function Book(author, title, numberOfPages, read) {
  this.author = author,
  this.title = title,
  this.numberOfPages = numberOfPages,
  this.read = read
};

function addBookToLibrary() {
  
}

const container = document.querySelector(".container");

function bookDisplayer(booksArray) {
  for (const book of booksArray) {
    const bookCard = document.createElement("div");

    const authorParagraph = document.createElement("p");
    const titleParagraph = document.createElement("p");
    const pagesParagraph = document.createElement("p");
    const readParagraph = document.createElement("p");

    authorParagraph.textContent = book.author;
    titleParagraph.textContent = book.title;
    pagesParagraph.textContent = book.numberOfPages;
    readParagraph.textContent = book.read;
    
    bookCard.appendChild(authorParagraph);
    bookCard.appendChild(titleParagraph);
    bookCard.appendChild(pagesParagraph);
    bookCard.appendChild(readParagraph);

    container.appendChild(bookCard);
  }
}

bookDisplayer(myLibrary);