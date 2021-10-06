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

function showForm() {
  const forms = document.querySelectorAll(".hidden-form");
  for (const form of forms) {
    form.style.display = "block";
  }
}

function submitBook() {
  var inputAuthor = document.getElementById("authorName").value;
  var inputTitle = document.getElementById("bookTitle").value;
  var inputPages = document.getElementById("numberPages").value;
  var inputRead = document.getElementById("read").value;

  addBookToLibrary(inputAuthor, inputTitle, inputPages, inputRead);
}

addBookToLibrary("some author", "some title", "some pages", "some status");
bookDisplayer(myLibrary);

newButton.addEventListener("click", () => {
  newButton.style.display = "none";
  showForm();
});

submitBook.addEventListener("click", () => {
  submitBook();
  newButton.style.display = "block";
});
