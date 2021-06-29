const BOOKS_KEY = "BOOKSHELF_APPS";

let books = [];

function isStorageSupported() {
    if (typeof Storage === "undefined") {
        alert("browser anda tidak mendukung web storage!");
        return false;
    } else {
        return true;
    }
}

function updateJson() {
    if (isStorageSupported()) {
        localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
    }
}

function fetchJson() {
    let data = JSON.parse(localStorage.getItem(BOOKS_KEY));

    if (data !== null) {
        books = data;
    }

    renderFromBooks();
}

function composeBookObject(id, title, author, year, isComplete) {
    return {
        id, title, author, year, isComplete,
    };
}

function renderFromBooks() {
    // for (book of books) {
    const book = books[0];
    addBook(book.id, book.title, book.author, book.year, book.isComplete);
    // }
}