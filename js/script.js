const books = [
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

function createList() {
    listContainer.innerHTML = "";

    books.forEach(function (book) {

        console.log(book);
        listContainer.innerHTML += `
                            <li>
                                <span>${book.title}</span>
                                <button class="del-book-btn"><i class="fas fa-trash-alt"></i></button>
                            </li>`
        const button = document.querySelector(".del-book-btn");
        console.log(button);

    })
}


createList();
