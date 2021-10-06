let myLibrary = [];

function Book(author, title, numberOfPages, read, id) {
  (this.author = author),
    (this.title = title),
    (this.numberOfPages = numberOfPages),
    (this.read = read);
}

Book.prototype.toggleRead = (id) => {
  myLibrary[id].read === "read"
    ? (myLibrary[id].read = "not read")
    : (myLibrary[id].read = "read");
  clearCards();
  bookDisplayer(myLibrary);
};

function addBookToLibrary(author, title, numberOfPages, read) {
  let newBook = new Book(author, title, numberOfPages, read);
  myLibrary.push(newBook);
}

const container = document.querySelector(".books-container");
const newButton = document.querySelector(".new-book");
const submitButton = document.querySelector("#submit-button");
const bookList = document.querySelectorAll("books-card");

function bookDisplayer(booksArray) {
  let i = 0;
  for (const book of booksArray) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("books-cards");

    const authorParagraph = document.createElement("p");
    authorParagraph.classList.add("book-item");
    const titleParagraph = document.createElement("p");
    titleParagraph.classList.add("book-item");
    const pagesParagraph = document.createElement("p");
    pagesParagraph.classList.add("book-item");
    const readParagraph = document.createElement("p");
    readParagraph.classList.add("book-item");
    const readButton = document.createElement("button");
    readButton.classList.add("book-item");
    const removeButton = document.createElement("button");
    removeButton.classList.add("book-item");

    readButton.classList.add("read-button");
    removeButton.classList.add("remove-button");

    authorParagraph.textContent = `Author: ${book.author}`;
    titleParagraph.textContent = `Title: ${book.title}`;
    pagesParagraph.textContent = `Pages: ${book.numberOfPages}`;
    readParagraph.textContent = `Status: ${book.read}`;
    readButton.textContent = "Toggle Read";
    removeButton.textContent = "Remove Book";

    bookCard.appendChild(authorParagraph);
    bookCard.appendChild(titleParagraph);
    bookCard.appendChild(pagesParagraph);
    bookCard.appendChild(readParagraph);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);

    container.appendChild(bookCard);
    bookCard.setAttribute("id", `${i}`);
    i++;

    removeButton.addEventListener("click", () => {
      const id = bookCard.getAttribute("id");
      myLibrary.splice(id, 1);
      clearCards();
      bookDisplayer(myLibrary);
    });

    readButton.addEventListener("click", () => {
      const id = bookCard.getAttribute("id");
      myLibrary[id].toggleRead(id);
    });
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
  var inputRead = document.querySelector('input[id="read"]:checked').value;

  addBookToLibrary(inputAuthor, inputTitle, inputPages, inputRead);
  clearCards();
  bookDisplayer(myLibrary);
}

newButton.addEventListener("click", () => {
  newButton.style.display = "none";
  showForm();
});

submitButton.addEventListener("click", () => {
  submitBook();
  hideForm();
  newButton.style.display = "block";
});

addBookToLibrary("Chibundu Onuzo", "Sankofa: A Novel", "304", "read");
addBookToLibrary("Tom Vitale", "In the Weeds", "407", "not read");
addBookToLibrary("Amor Towles", "The Lincoln Highway", "588", "read");
addBookToLibrary("Jonathan Franzen", "Crossroads: A Novel ", "681", "read");
addBookToLibrary("Jane Goodall", "The Book of Hope", "254", "not read");
bookDisplayer(myLibrary);
