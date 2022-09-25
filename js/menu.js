
let sidemeu = document.getElementById("sidemenu")

const openmenu =()=>{
    sidemeu.style.right = "0"
}
const closemenu =()=>{
    sidemeu.style.right = "-200px"
}

const nav = document.querySelector('.nav')

    window.addEventListener('scroll',function(){
        nav.classList.toggle('active', window.scrollY > 0)
    })