import { listContainer } from "../constants/constants.js";
import { removeBook } from "../script.js";
import { books } from "../script.js";

export function createList() {
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
        listContainer.innerHTML += '<div class="error-message">Add some books to the list.</div>';
    }
}