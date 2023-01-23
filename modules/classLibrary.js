export default class Library {
  constructor() {
    this.collection = [];
  }

  addBook(Booktitle, Bookauthor) {
    if (Booktitle && Bookauthor) {
      const newBook = { title: Booktitle, author: Bookauthor };
      this.collection.push(newBook);
    }
  }

  removeBook(index) {
    this.collection.splice(index, 1);
  }
}
 const obj = new Library();
 export {obj};