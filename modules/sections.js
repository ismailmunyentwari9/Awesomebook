const sections = () => {
    const listBtn = document.getElementById('list-link');
const listSection = document.querySelector('.list-section');
const addBtn = document.querySelector('#add-link');
const addSection = document.getElementById('add-book');
const contactBtn = document.querySelector('#contact-link');
const contactSection = document.querySelector('.contact-section');

listBtn.addEventListener('click', () => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBtn.addEventListener('click', () => {
  addSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'block';
});

}
export default sections;