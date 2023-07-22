var header = document.getElementById('header');

window.addEventListener('scroll', ()=> {

    var scroll = window.scrollY

    if(scroll>20){
        header.style.backgroundColor = '#121212'

    } else{
        header.style.backgroundColor = 'transparent'
    }
})