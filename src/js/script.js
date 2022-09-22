'use strict'

//burger
const burger = document.getElementsByClassName('burger__wr')[0];
const burgerMenu = document.getElementsByClassName('burger__menu')[0];
const nav = document.getElementsByClassName('header__nav')[0]
function burgerChange() {
  nav.classList.toggle('active');
  burgerMenu.classList.toggle('active')
}
burger.addEventListener('click', burgerChange)


//form 

const sendData = async (obj) => {
  const response = await fetch('./mail.php', {
    method: "POST",
    body: obj
  })
  if (response.ok) {
    form.reset();
    return await response.json();

  } else {
    throw new Error(`Error:${response.status}`)
  }

}

let form = document.getElementById('form');
let obj = {};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(this);
  obj = Object.fromEntries(formData)
  console.log(obj)
  sendData(obj)

})


//Year for footer

function changeYear() {
  let span = document.getElementsByClassName('footer__content')[0].getElementsByTagName('span')[0];
  let year = new Date().getFullYear();
  span.innerHTML = `Copyright ${year} `
}
changeYear();

//button link to contact

let cursor = document.getElementsByClassName('cursor')[0];
console.log(cursor)
function addCustomCursor(e) {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  console.log(mouseX, mouseY)
  cursor.style.transform = `translate3d(${mouseX - 25}px, ${mouseY - 250}px, 0)`
}

window.addEventListener('mousemove', addCustomCursor)



var Reloaded  = function(){
if(location.href !== 'http://localhost:3000/') {
  location.href = 'http://localhost:3000/#portflio'
}
} //страницу перезагрузили

window.onload = function() {
var loaded = sessionStorage.getItem('loaded');
if(loaded) {
  Reloaded();
} else {
  sessionStorage.setItem('loaded', true);
}
}

const productContainers = [...document.querySelectorAll('.portfolio__items')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})