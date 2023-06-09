/*
Daniel Woods
CIT 281 Lab 6
*/

class Book {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
}

const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate };
      this._books.push(newBook);
    }
  }
  deleteBook(isbn) {
    const index = this._books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      this._books.splice(index, 1);
      console.log(`Book with ISBN ${isbn} deleted.`);
    } else {
      console.log(`Book with ISBN ${isbn} not found.`);
    }
  }
  listBooks() {
    for (const book of this._books) {
      const {title, author, pubDate, isbn} = book;
      console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
    }
  }
  getThreeBooks() {
    return this._books.slice(0, 3);
  }
}

// Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const newBook = new Book("Atomic Habits", "Daniel Woods", "10/16/2018");

// Add book to library and output library count and books
library.addBook(newBook);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Create books
//const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("Atomic Habits", "John Sandford", "04/13/2021", "1398505501");

// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
const threeBooks = library.getThreeBooks();
for (const book of threeBooks) {
  const { title, author, pubDate, isbn } = book;
  console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
}
//library.listBooks();