let myLibrary = [];

function Book(author, title, numberOfPages, read, id) {
  (this.author = author),
    (this.title = title),
    (this.numberOfPages = numberOfPages),
    (this.read = read),
    (this.id = id);
}

Book.prototype.toggleRead = () => {
  this.read === "read" ? this.read = "not read" : this.read = "read";
  clearCards();
  bookDisplayer(myLibrary);
};

function addBookToLibrary(author, title, numberOfPages, read) {
  let newBook = new Book(author, title, numberOfPages, read);
  myLibrary.push(newBook);
}

const container = document.querySelector(".container");
const newButton = document.querySelector(".new-book");
const submitButton = document.querySelector("#submit-button");
const bookList = document.querySelectorAll("books-card");

function bookDisplayer(booksArray) {
  let i = 0;
  for (const book of booksArray) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("books-cards");

    const authorParagraph = document.createElement("p");
    const titleParagraph = document.createElement("p");
    const pagesParagraph = document.createElement("p");
    const readParagraph = document.createElement("p");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    removeButton.classList.add("remove-button");

    authorParagraph.textContent = book.author;
    titleParagraph.textContent = book.title;
    pagesParagraph.textContent = book.numberOfPages;
    readParagraph.textContent = book.read;
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

    removeButton.addEventListener('click', () => {
      const id = bookCard.getAttribute('id');
      myLibrary.splice(id, 1);
      clearCards();
      bookDisplayer(myLibrary);
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
