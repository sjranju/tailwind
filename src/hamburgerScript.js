const hamburgerMenu=document.getElementById('menu-btn')
const menu=document.getElementById('menu')

hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}
)