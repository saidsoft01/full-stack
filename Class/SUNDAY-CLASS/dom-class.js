// JavaScript for dom-class.html and event-listener.html//
//--------------------------------------------------------


// 1.........FORMATTING ELEMENT

//const title = document.querySelector('#main-heading');
// title.style.color = 'blue'

//  const listItems = document.querySelectorAll('.list-items');
// console.log(listItems)

// for(i = 0; i < listItems.length; i++) {

//     listItems[i].style.fontSize = '2rem';    
// }

// 2.............CREATING & ADDING ELEMENTS

// const contain = document.querySelector('.container');
// const head = document.createElement('h1');

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li)
// li.innerText = 'X-men';
//li.style.color = 'green'


// contain.append(head)
//  head.innerText = 'fuck you';

// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// 3..........MODIFYING ATTRIBUTES & CLASSES

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

//console.log(title.getAttribute('id'))

// li.classList.add('list-items');

// console.log(li.classList.contains('list-items'))

// 4........REMIVE AN ELEMENT
// li.remove();

// 5.......PARENT AND CHILD NODE/ELEMENT

//let ul = document.querySelector('ul');
// console.log(ul.parentNode)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)

// console.log(ul.childNodes)
// ul.childNodes[1].style.backgroundColor = 'blue';
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)
// console.log(ul.previousSibling)
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSiblingSibling)
// console.log(ul.nextSibling)
//console.log(ul.childNodes)

// document.querySelector('#star-wars').addEventListener('click', function(e) {
//     console.log('War in the stars')

//     const starWars = e.target
//     if (starWars.matches('li')) {
//         starWars.style.backgroundColor = 'lightgrey';
//     }  
// })

// document.querySelector('#harry-potter').addEventListener('click', function(e) {
//     console.log('Magic in the air')

//     const starWars = e.target
//     if (starWars.matches('li')) {
//         starWars.style.backgroundColor = 'lightgrey';
//     }  
// })

// document.querySelector('#lord').addEventListener('click', function(e) {
//     console.log('Mordoch will')

//     const starWars = e.target
//     if (starWars.matches('li')) {
//         starWars.style.backgroundColor = 'lightgrey';
//     }  
// })

// document.querySelector('#marvel').addEventListener('click', function(e) {
//     console.log('The Avengers')

//     const starWars = e.target
//     if (starWars.matches('li')) {
//         starWars.style.backgroundColor = 'lightgrey';
//     }  
// })

// document.querySelector('#head-under').addEventListener('click', function(e) {
    
//     headList = e.target
//     console.log(headList.getAttribute('id') + ' is clicked');
//     if (headList.matches('li')) {
//         headList.style.backgroundColor = 'lightgrey'
//     }
// })

// const movies = document.querySelector('#head-under')
// movies.setAttribute('class', 'movies')

// const movies = document.querySelector('#head-under');
// const newMovie = document.createElement('li');
// newMovie.innerText = 'Blind Side';
// newMovie.classList.add('class', 'list-items')
// newMovie.setAttribute('id', 'slum');
// movies.appendChild(newMovie)
// console.log(movies)

// newArray = [{
//     person: 'Ola Ahmed',
//     quote: 'Oma Bomb Ni'
// },
// {
//     person: 'Kupa',
//     quote: 'Brother Jero'
// },
// {
//     person: 'Dele Alabi',
//     quote: 'Integrity'
// }
// ]
// console.log(newArray)

// let random = Math.floor(Math.random() * 10);
// console.log(random)