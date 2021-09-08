//initial set up of library / variables
let myLibrary = [];
const formCont = document.querySelector("#formCont")
let form = document.querySelector('#bookForm');
let inputTitle = document.querySelector("#iTitle");
let inputAuthor = document.querySelector("#iAuthor");
let inputPages = document.querySelector("#iPages");
let newBook = document.querySelector('#addBook');
//let inputRead = document.querySelector("#iTitle").value
let shelf = document.querySelector('#shelf');


//makes the book
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

//logbox functionality
function logBox(){
   let box = document.querySelector('#logBox');
   const total = document.querySelector('#total');
   const readBooks = document.querySelector('#read');
   let bookCounter = 0, brCounter = 0;
    myLibrary.forEach(book => {
       bookCounter++;
       if(book.read === "Read!"){
           brCounter++;
       }
   });
   total.textContent = `Total Books: ${bookCounter}`;
   readBooks.textContent = `Books Read: ${brCounter}`;
}

//opens and closes form
function formPop() {
    if (formCont.hasAttribute('hidden')) {
        form.reset();
        formCont.removeAttribute('hidden');

    } else formCont.setAttribute('hidden', 'true')

}

//add book button functionality
const bookForm = document.querySelector('#addBook');
bookForm.addEventListener('click', () => {
    formPop();
});


function addBook(i) {

    const cardNode = document.createElement('div')
    cardNode.classList.add('card')
    cardNode.setAttribute('data-index', `${i}`)

    const titleNode = document.createElement('h3');
    let title = document.querySelector('#iTitle').value;
    titleNode.innerHTML = `Title: ${title}`;

    const authorNode = document.createElement('h4');
    let author = document.querySelector('#iAuthor').value;
    authorNode.innerHTML = `Author: ${author}`;

    const pagesNode = document.createElement('h4');
    let pages = document.querySelector('#iPages').value;
    pagesNode.innerHTML = `Pages: ${pages}`;

    const readNode = document.createElement('h4');
    let check = document.querySelector('#checkbox').checked;
    if(check === false){
        read = "Not Read Yet"
    } else read = "Read!"
    readNode.innerHTML = `${read}`;

    const updateNode = document.createElement('button');
    updateNode.classList.add('update');
    updateNode.innerHTML = `Update`;

    const deleteNode = document.createElement('button');
    deleteNode.innerHTML = `Delete`;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    cardNode.appendChild(titleNode);
    cardNode.appendChild(authorNode);
    cardNode.appendChild(pagesNode);
    cardNode.appendChild(readNode);
    cardNode.appendChild(updateNode);
    cardNode.appendChild(deleteNode);
    shelf.appendChild(cardNode);
    formPop();
    logBox();

     //update book status
     updateNode.addEventListener('click', () => {
        if (readNode.innerHTML === 'Not Read Yet') {
            readNode.innerHTML = 'Read!'
            book.read = 'Read!'
            logBox();
        } else readNode.innerHTML = 'Not Read Yet'
        book.read = 'Not Read Yet'
        logBox();
    })

    //delete book
    deleteNode.addEventListener('click', ()=>{
     shelf.removeChild(cardNode);
     myLibrary.splice(book, 1);
     logBox();
    })
}

//adds book to library
function makeLibrary() {

    myLibrary.forEach(function(book, i){

        const cardNode = document.createElement('div')
        cardNode.classList.add('card')
        cardNode.setAttribute('data-index', `${i}`)

        const titleNode = document.createElement('h3');
        let title = document.querySelector('#iTitle').value;
        titleNode.innerHTML = `Title: ${title}`;

        const authorNode = document.createElement('h4');
        let author = document.querySelector('#iAuthor').value;
        authorNode.innerHTML = `Author: ${author}`;

        const pagesNode = document.createElement('h4');
        let pages = document.querySelector('#iPages').value;
        pagesNode.innerHTML = `Pages: ${pages}`;

        const readNode = document.createElement('h4');
        let check = document.querySelector('#checkbox').checked;
        if(check === false){
            read = "Not Read Yet"
        } else read = "Read!"
        readNode.innerHTML = `${read}`;

        const updateNode = document.createElement('button');
        updateNode.classList.add('update');
        updateNode.innerHTML = `Update`;

        const deleteNode = document.createElement('button');
        deleteNode.innerHTML = `Delete`;

        cardNode.appendChild(titleNode)
        cardNode.appendChild(authorNode)
        cardNode.appendChild(pagesNode)
        cardNode.appendChild(readNode)
        cardNode.appendChild(updateNode)
        cardNode.appendChild(deleteNode)
        formPop();
        logBox();
        
    //update book status
    updateNode.addEventListener('click', () => {
        if (readNode.innerHTML === 'Not Read Yet') {
            readNode.innerHTML = 'Read!';
            book.read = 'read';
            logBox();
        } else readNode.innerHTML = 'Not Read Yet';
        book.read = 'not read';
        logBox();
    })

    //delete book
    deleteNode.addEventListener('click', ()=>{
        shelf.removeChild(cardNode);
        myLibrary.splice(book, 1);
        logBox();
    })
})
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Not Read Yet');
myLibrary.push(theHobbit);
window.addEventListener('load', makeLibrary());

document.querySelector('#close').addEventListener('click', formPop());
//addbook event listener
form.addEventListener('submit', (e, i)=>{
    e.preventDefault();
    addBook(i);
    
})