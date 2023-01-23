// import files here from modules file....
import './modules/luxon.js';
import Library from './modules/classLibrary.js';
import { obj } from './modules/classLibrary.js';
import getBooks from "./modules/getBook.js";
import sections from './modules/sections.js';

const booklist = document.querySelector('#booklist');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const buttonAdd = document.getElementById('add-btn');



const stringCollection = localStorage.getItem('collection');

if (stringCollection) {
  const parsedCollection = JSON.parse(stringCollection);
  obj.collection = parsedCollection;
}

sections();

getBooks();

buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  obj.addBook(inputTitle.value, inputAuthor.value);
  getBooks();

  inputTitle.value = '';
  inputAuthor.value = '';
});

