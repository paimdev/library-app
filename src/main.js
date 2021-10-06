let myLibrary = [];

function Book(author, title, numberOfPages, read) {
  (this.author = author),
    (this.title = title),
    (this.numberOfPages = numberOfPages),
    (this.read = read);
}

function addBookToLibrary(author, title, numberOfPages, read) {
  let newBook = new Book(author, title, numberOfPages, read);
  myLibrary.push(newBook);
}

const container = document.querySelector(".container");
const newButton = document.querySelector(".new-book");
const submitButton = document.querySelector("#submit-button");
const bookList = document.querySelectorAll("books-card");

function bookDisplayer(booksArray) {
  for (const book of booksArray) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("books-cards");

    const authorParagraph = document.createElement("p");
    const titleParagraph = document.createElement("p");
    const pagesParagraph = document.createElement("p");
    const readParagraph = document.createElement("p");
    const removeButton = document.createElement("button");

    authorParagraph.textContent = book.author;
    titleParagraph.textContent = book.title;
    pagesParagraph.textContent = book.numberOfPages;
    readParagraph.textContent = book.read;
    removeButton.textContent = "remove book";

    bookCard.appendChild(authorParagraph);
    bookCard.appendChild(titleParagraph);
    bookCard.appendChild(pagesParagraph);
    bookCard.appendChild(readParagraph);
    bookCard.appendChild(removeButton);

    container.appendChild(bookCard);
  }
}

function clearCards() {
  const bookList = document.querySelectorAll(".books-cards");
  for (const bookCard of bookList) {
    bookCard.remove();
  }
}

function showForm() {
  const forms = document.querySelectorAll(".hidden-form");
  for (const form of forms) {
    form.style.display = "block";
  }
}

function hideForm() {
  const forms = document.querySelectorAll(".hidden-form");
  for (const form of forms) {
    form.style.display = "none";
  }
}

function submitBook() {
  var inputAuthor = document.getElementById("authorName").value;
  var inputTitle = document.getElementById("bookTitle").value;
  var inputPages = document.getElementById("numberPages").value;
  var inputRead = document.getElementById("read").value;

  addBookToLibrary(inputAuthor, inputTitle, inputPages, inputRead);
  clearCards();
  bookDisplayer(myLibrary);
}

addBookToLibrary("some author", "some title", "some pages", "some status");
bookDisplayer(myLibrary);

newButton.addEventListener("click", () => {
  newButton.style.display = "none";
  showForm();
});

submitButton.addEventListener("click", () => {
  submitBook();
  hideForm();
  newButton.style.display = "block";
});
