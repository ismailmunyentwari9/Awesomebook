 const getBooks = () => {
    let innerhtml = '';
  
    obj.collection.forEach((book, index) => {
      innerhtml += `
      <div>
   
       <p>  "${book.title}" by 
           ${book.author} 
       </p>
          <button id="remove-btn${index}">Remove</button>
              </div>
              
      `;
    });
  
    booklist.innerHTML = innerhtml;
  
    obj.collection.forEach((book, index) => {
      const removeBtn = document.getElementById(`remove-btn${index}`);
      removeBtn.addEventListener('click', () => {
        obj.removeBook(index);
        getBooks();
      });
    });
  
    localStorage.setItem('collection', JSON.stringify(obj.collection));
  };
  export default getBooks ;
  import { obj } from "./classLibrary.js";