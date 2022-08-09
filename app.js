
const nav__toggle = document.querySelector('.nav__toggle')
const nav__close = document.querySelector('.nav__close')
const Navlink = document.querySelectorAll('.nav__link')


nav__toggle.addEventListener('click', () =>{
    nav__menu.classList.add('show-nav')
} )

nav__close .addEventListener('click', () =>{
    nav__menu.classList.remove('show-nav')
} )

Navlink.forEach(el =>{
    el.addEventListener('click', ()=>{
        const nav__menu = document.querySelector('.nav__menu')
        nav__menu.classList.remove('show-nav')
    })
})



