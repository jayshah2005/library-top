let myLibrary = [];

function Book(author, title, numpages) {
  // the constructor...
  this.author = author
  this.title = title;
  this.numpages = numpages
  this.read = 'False';
}

function listLibrary(){
  const books = document.querySelector('.container')
  let div;
  let title;
  let author;
  let numpages;
  let del;
  let read;

  emptyDOM();

  for(book in myLibrary){
    div = document.createElement('div')
    title = document.createElement('div')
    author = document.createElement('div')
    numpages = document.createElement('div')
    del = document.createElement('button')
    read = document.createElement('button')

    div.className = 'book'

    title.className = 'title'
    title.innerHTML = myLibrary[book].title

    author.className = 'author'
    author.innerHTML = 'by ' + myLibrary[book].author

    numpages.className = 'numpages';
    numpages.innerHTML = myLibrary[book].numpages + ' pages'

    del.className = 'remove-button'
    del.innerHTML = 'Remove'
    del.value = book

    read.className = 'remove-button'
    read.innerHTML = myLibrary[book].read
    read.value = book

    read.addEventListener('click', (event) => {
      index = event.target.value
      if(event.target.innerHTML == 'False') {
        event.target.innerHTML = 'True';
        myLibrary[index].read = 'True'
      }
      else {
        event.target.innerHTML = 'False'
        myLibrary[index].read = 'False'
      }
    })

    del.addEventListener('click', (event)=>{
      index = event.target.value
      myLibrary.splice(index, 1)
      listLibrary()
    })


    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(numpages)
    div.appendChild(read)
    div.appendChild(del)
    books.appendChild(div)
    myLibrary[book]
  }
}

function emptyDOM() {
  const books = document.querySelectorAll('.book');
  books.forEach((book) => {
    book.remove();
  });
}


function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book)

  listLibrary()
}

let addBook = document.querySelector('.new-book');
let form = document.querySelector('.form')
let add = document.querySelector('.add')

addBook.addEventListener('click', (event) => {
  form.className = 'form'
  addBook.className = 'hidden'
})

add.addEventListener('click', (event) => {

  let author = document.querySelector('#author').value
  let title = document.querySelector('#title').value
  let numpages = document.querySelector('#numpages').value

  if(!(author == '' || title == '' || numpages == '')){
    event.preventDefault()
    book = new Book(author, title, numpages);
    addBookToLibrary(book)

    form.className = 'form hidden'
    addBook.className = 'new-book'
  }
})

listLibrary()