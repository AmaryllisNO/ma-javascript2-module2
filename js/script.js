import { input, listKey } from "./constants/constants.js";
import { createList } from "./functions/createList.js"
import { retrieveFromStorage } from "./functions/retrieveFromStorage.js"


export let books = retrieveFromStorage();

export function addItem() {
    const itemValue = input.value.trim();
    console.log(itemValue);

    if (itemValue.length >= 1) {
        const newItem = { title: itemValue };
        //  console.log(input.value); 
        books.push(newItem);

        createList(books);
        saveToStorage(books);
    }
}

export function removeBook() {
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

function saveToStorage(valuteToSave) {
    localStorage.setItem(listKey, JSON.stringify(valuteToSave))
}

createList();

button.addEventListener("click", addItem);
