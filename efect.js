const nav = document.querySelector('.header')

window.addEventListener('scroll',function(){
    nav.classList.toggle('active',window.scrollY >=0)

})