const myLibrary = [];
const addBook = document.getElementById('submit')
const form = document.querySelector('form')
const tabl= document.getElementById('bookTable')
const  tbody= document.getElementsByTagName('tbody')

function Book(title,aut, pages,red) {
  // the constructor...\
  this.title= title;
  this.aut= aut;
  this.pages=pages;
  this.red=red

}
function addBookToLibrary(title,aut,pages,red) {
  // do stuff here
  let newBook= new Book(title,aut,pages,red)
    myLibrary.push(newBook);
   
  
}

function createBookRow(book){
  const row = tbody[0].insertRow();
  const titleCell= row.insertCell();
  const authCell= row.insertCell();
  const pagesCell=row.insertCell();
  const readCell= row.insertCell();

  titleCell.innerHTML= book.title;
  authCell.innerHTML= book.aut;
  pagesCell.innerHTML= book.pages;
  readCell.innerHTML= book.red;

}

function displayBooks(){
  tbody[0]='';
  for(const book of myLibrary){
    createBookRow(book)
  }
}

addBook.addEventListener('click',(e)=>{
  e.preventDefault();
console.log('sumited')
  const title = document.getElementById('title').value;
  const aut = document.getElementById('auth').value;
  const pages= document.getElementById('pages').value;
  const red = document.getElementById('read').checked;
 if(title==''){
  
 }
 else {
  addBookToLibrary(title,aut,pages,red);
  
 }
  
displayBooks()
})




