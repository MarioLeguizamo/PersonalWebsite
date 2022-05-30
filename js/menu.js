const menu = document.querySelector('.icono-menu')
const navegacion = document.querySelector('.menu')

menu.addEventListener('click', ()=>{
    navegacion.classList.toggle("despalzamiento-menu")
})

window,addEventListener('click', e=>{
    if(navegacion.classList.contains("despalzamiento-menu") && e.target != navegacion && e.target != menu){
        navegacion.classList.toggle("despalzamiento-menu")
    }
})