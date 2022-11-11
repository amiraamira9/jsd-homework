const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
for (let i = 0; i < books.length; i++)
{
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `Title : ${books[i].title} by Author : ${books[i].author}`;
    document.body.appendChild(paragraph);

}
// If you have read it, make the text color green. If you haven't, make the text color red.
let item = document.querySelectorAll("p");
for (let i = 0; i < books.length; i++)
{
    if(books[i].alreadyRead)
        item[i].style.color = "green";
    else
        item[i].style.color = "red";
}

// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page

var booksCollection = [
    {title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547125681l/24113._SY475_.jpg",
    alreadyRead: false
    },
    {title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533l/23692271._SY475_.jpg",
    alreadyRead: true
    },
    {title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433086293l/21._SY475_.jpg",
    alreadyRead: true
    },
    {
    title: "A Life on our Planet",
    author: "David Attenborough",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608723131l/53916142._SY475_.jpg",
    alreadyRead: true
    },
    {
    title: "Cosmos",
    author: "Carl Sagan",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388620656l/55030.jpg",
    alreadyRead: false
    }];


let bookList = document.createElement("ul");
for (let i = 0; i < booksCollection.length; i++)
{   
    let paragraph = document.createElement("p");   
    let bookItem = document.createElement("li");
    paragraph.innerHTML = `Title : ${books[i].title} by Author : ${books[i].author}`;
    bookItem.appendChild(paragraph);

    if(booksCollection[i].alreadyRead)
        bookItem.style.color = "green";
    else
        bookItem.style.color = "red";

    let imgBook = document.createElement("img");
    imgBook.src = booksCollection[i].img;
    bookItem.appendChild(imgBook);
    
    bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);

