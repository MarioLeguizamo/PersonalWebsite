const menu = document.querySelector('.icono-menu')
const navegacion = document.querySelector('.menu-navegacion')

menu.addEventListener('click', ()=>{
    navegacion.classList.toggle("desplazamiento-menu")
})

window,addEventListener('click', e=>{
    if(navegacion.classList.contains("desplazamiento-menu") && e.target != navegacion && e.target != menu){
        navegacion.classList.toggle("desplazamiento-menu")
    }
})