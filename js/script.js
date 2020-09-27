import { listContainer, input } from "./constants/constants.js";

let books = [];



function createList() {
    listContainer.innerHTML = "";


    books.forEach(function (book) {

        let bookTitle = book.title;
        listContainer.innerHTML += `
                            <li>
                                <span>${bookTitle}</span>
                                <button class="del-book-btn"><i class="fas fa-trash-alt" data-title="${bookTitle}"></i></button>
                            </li>`

    })

    const button = document.querySelectorAll(".del-book-btn");

    button.forEach((button) => {
        button.addEventListener("click", removeBook);
    })

    if (books.length === 0) {
        listContainer.innerHTML += '<div class="error-message">Whoops, no books are in the list!</div>';
    }
}

button.addEventListener("click", addItem);

function addItem() {
    const itemValue = input.value.trim();
    console.log(itemValue);

    if (itemValue.length >= 1) {
        const newItem = { title: itemValue };
        //  console.log(input.value); 
        books.push(newItem);
        // console.log(todos); 

        createList(books);
    }
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

createList();

