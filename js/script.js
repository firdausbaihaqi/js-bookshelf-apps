const formInput = document.getElementById("inputBook");
const eventDelete = new Event("eventDelete");

const INCOMPLETE_BOOK = "incompleteBookshelfList";
const COMPLETE_BOOK = "completeBookshelfList";

document.addEventListener("DOMContentLoaded", function () {
    if (isStorageSupported()) {
        fetchJson();
    }
});

formInput.addEventListener("submit", function (event) {
    event.preventDefault();
    const idBook = +new Date();
    const inputBookTitle = document.getElementById("inputBookTitle").value;
    const inputBookAuthor = document.getElementById("inputBookAuthor").value;
    const inputBookYear = document.getElementById("inputBookYear").value;
    const inputBookIsComplete = document.getElementById("inputBookIsComplete").checked;

    // console.log(inputBookTitle + inputBookAuthor + inputBookYear + inputBookIsComplete + idBook)
    console.log(books)
    
    addBook(idBook, inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
});
