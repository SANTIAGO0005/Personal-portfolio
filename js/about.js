let tablinks = document.getElementsByClassName("tab-links")
let tabcontens = document.getElementsByClassName("tab-contents")

const opentab = (tabname) =>{

    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontens){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}