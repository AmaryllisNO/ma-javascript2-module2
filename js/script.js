let books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];



const listContainer = document.querySelector("#book-list");

createList();

function createList() {
    listContainer.innerHTML = "";

    books.forEach(function (book) {

        let bookTitle = book.title;
        listContainer.innerHTML += `
                            <li>
                                <span>${bookTitle}</span>
                                <button class="del-book-btn"><i class="fas fa-trash-alt" data-title="${bookTitle}"></i></button>
                            </li>`

        const button = document.querySelector(".del-book-btn");

        button.addEventListener("click", removeBook);
    })
}

function removeBook() {
    const deleteThisBook = event.target.dataset.title;

    let newBooks = books.filter(function (book) {
        if (deleteThisBook !== book.title) {
            return true;
        }
    })

    console.log(newBooks);

    books = newBooks;

    createList();
}


