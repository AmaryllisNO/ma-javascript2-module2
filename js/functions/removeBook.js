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