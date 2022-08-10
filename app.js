
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


var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween : 30,
    loop: 'true', 
        pagination: {
          el: ".swiper-pagination",
        },
      });

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween : 16,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: 'true', 
  
      });



window.addEventListener('scroll', () =>{
    const header = document.querySelector('.header')
    if(this.scrollY >= 100){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
})

/*********script complique */

// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () =>{
    const scrollY = window.pageYOffset
    // console.log(scrollY)

    sections.forEach(current =>{
        // console.log(current)
// "offsetHeight" Propriété DHTML permettant d'obtenir la hauteur d'un élément par rapport à la mise en page.
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')


         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__item').classList.add('active-link')
        }else{
            document.querySelector('.nav__item').classList.remove('active-link')


            
        }
    })
})


/**************up scrooll */

 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)