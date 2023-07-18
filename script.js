let myLibrary = [];


function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
}

//add book object to the array library
function addBookToLibrary() {
    //access form data
    const form = document.forms['form'];
    const title = form.elements[0].value;
    const author = form.elements[1].value;
    const pages = form.elements[2].value;
    const isRead = document.getElementById('isRead').checked ? true : false;
    console.log(isRead);
    //create book object
    myLibrary.push(new Book(title, author, pages, isRead));
    event.preventDefault();
    hideMenu();
    displayBookFromLibrary();
}

//display book object from array to the webpage
function displayBookFromLibrary() {
    const grid =  document.getElementById('book-grid');
    grid.innerHTML = ''; //clear the book-grid content

    for(let i=0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.classList.add('book');
        grid.appendChild(book);
        //create book for each object from array
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pageDiv = document.createElement('div');
        titleDiv.innerText = myLibrary[i]['title'];
        authorDiv.innerText = myLibrary[i]['author'];
        pageDiv.innerText = myLibrary[i]['pages'];
        book.appendChild(titleDiv);
        book.appendChild(authorDiv);
        book.appendChild(pageDiv);
        //assign needed property and attribute based on the book isRead value
        const readBtn = document.createElement('button');
        readBtn.setAttribute('data-object-idx', i);
        readBtn.setAttribute('onclick', `updateReadStatus(${i})`);
        if(myLibrary[i]['isRead'] == true) {
            readBtn.classList.add('main-btn');
            readBtn.innerText = 'Read';
        }
        else {
            readBtn.classList.add('not-read-btn');
            readBtn.innerText = 'Not Read';
        }
        book.appendChild(readBtn);

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('onclick', `removeBook(${i})`);
        removeBtn.innerText = 'Remove';
        book.appendChild(removeBtn);
    }
}



const form = document.getElementById('form-wrapper');
//hide addMenu
function hideMenu() {
    form.style.display = 'none';
}
//display addMenu
function showMenu() {
    form.style.display = 'block';
}


//update object isRead value
function updateReadStatus(index) {
    if(myLibrary[index]['isRead']  === true) {
        myLibrary[index]['isRead'] = false;
    }
    else {
        myLibrary[index]['isRead'] = true;
    }

    displayBookFromLibrary();
}


//remove book object from array
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBookFromLibrary();
}


/*
form.addEventListener('click', () => {
        hideMenu();
});
*/

