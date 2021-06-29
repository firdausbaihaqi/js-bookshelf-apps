function addBook(idBook, inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete) {

    const bookTitle = document.createElement("h5");
    bookTitle.classList.add("text-truncate");
    bookTitle.style.maxWidth = "200px";
    bookTitle.innerText = inputBookTitle;

    const bookAuthor = document.createElement("span");
    bookAuthor.classList.add("text-truncate", "d-inline-block");
    bookAuthor.style.maxWidth = "200px";
    bookAuthor.innerText = inputBookAuthor;

    const bookYear = document.createElement("span");
    bookYear.innerText = inputBookYear;

    const br = document.createElement("br");

    const card = document.createElement("article");
    card.setAttribute("id", idBook)
    card.classList.add("card", "my-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "border-start", "border-4", "border-info", "d-flex", "justify-content-between");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardAction = addAction(inputBookIsComplete, idBook);

    cardContent.append(bookTitle, bookAuthor, br, bookYear);
    cardBody.append(cardContent);
    cardBody.append(cardAction);
    card.append(cardBody);

    if (inputBookIsComplete) {
        document.getElementById(COMPLETE_BOOK).append(card);
    } else {
        document.getElementById(INCOMPLETE_BOOK).append(card);
    }

    const bookObject = composeBookObject(idBook, inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
    books.push(bookObject);
    updateJson();
}

function addAction(inputBookIsComplete, idBook) {
    const cardActions = document.createElement("div");

    const actionDelete = document.createElement("button");
    actionDelete.classList.add("btn", "btn-sm", "btn-outline-danger", "mx-1");
    actionDelete.innerHTML = '<i class="bi bi-x"></i>';

    actionDelete.addEventListener("click", function () {
        const cardParent = document.getElementById(idBook);
        cardParent.addEventListener("eventDelete", function (event) {
            event.target.remove();
        });
        cardParent.dispatchEvent(eventDelete);
    });

    cardActions.append(actionDelete);

    if (inputBookIsComplete) {
        cardActions.append(actionUndo(idBook));
    } else {
        cardActions.append(actionRead(idBook));
    }

    return cardActions;
}

function actionRead(idBook) {
    const action = document.createElement("button");
    action.classList.add("btn", "btn-sm", "btn-outline-primary");
    action.innerHTML = '<i class="bi bi-check"></i>';

    action.addEventListener("click", function () {
        const cardParent = document.getElementById(idBook);

        const bookTitle = cardParent.querySelector(".card-content > h5").innerText;
        const bookAuthor = cardParent.querySelectorAll(".card-content > span")[0].innerText;
        const bookYear = cardParent.querySelectorAll(".card-content > span")[1].innerText;

        cardParent.remove();
        addBook(idBook, bookTitle, bookAuthor, bookYear, true);
    })

    return action;
}

function actionUndo(idBook) {
    const action = document.createElement("button");
    action.classList.add("btn", "btn-sm", "btn-outline-secondary");
    action.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';

    action.addEventListener("click", function () {
        const cardParent = document.getElementById(idBook);

        const bookTitle = cardParent.querySelector(".card-content > h5").innerText;
        const bookAuthor = cardParent.querySelectorAll(".card-content > span")[0].innerText;
        const bookYear = cardParent.querySelectorAll(".card-content > span")[1].innerText;

        cardParent.remove();
        addBook(idBook, bookTitle, bookAuthor, bookYear, false);
    })

    return action;
}