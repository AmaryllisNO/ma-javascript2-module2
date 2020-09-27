import { input } from "./constants/constants.js";
import { createList } from "./functions/createList.js"
import { books } from "./utils/books.js";



export function addItem() {
    const itemValue = input.value.trim();
    console.log(itemValue);

    if (itemValue.length >= 1) {
        const newItem = { title: itemValue };
        //  console.log(input.value); 
        books.push(newItem);

        createList(books);
    }
}

createList();

button.addEventListener("click", addItem);
