// DOM -Document object model
//console.log(document)

//key components
// Node represent element, attribute and text
// Element like <div>, hi, img
// Attribute like IdleDeadline, class, src
// text

// let first = document.getElementById('first');
// first.textContent = 'Saka';
// first.style.color = 'red';
// first.toggleAttribute('style') // if targetted attribut is present, you remove it. and if the targetted attribute is not present, you add it
// first.innerHTML = "<img src= 'https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery'>"

// let parent = document.getElementById('parent');
// let newItem = document.createElement('li');
// newItem.innerHTML = 'new item';
// parent.append(newItem);
// //newItem.remove

// // Event Listener
// newItem.addEventListener('mouseover', ()=>{
//     newItem.style.color = 'red';
//     newItem.style.fontSize = '30px';
// }) 

// newItem.addEventListener('mouseout', ()=>{
//     newItem.style.color = 'black';
//     newItem.style.fontSize = '19px'
// })

// newItem.addEventListener('click', ()=>{
//     newItem.style.color = 'green';
//     newItem.style.fontSize = '19px'
//    newItem.classList.toggle('bg') // go and create a toggle class in style to turn it off and on

// })

// function bgChange() {
//     newItem.classList.remove('bg')
// }