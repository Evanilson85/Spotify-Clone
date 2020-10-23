var menu = document.querySelector("#check-menu")
var nav = document.querySelector(".nav")
menu.addEventListener("click", e =>{
    
    if(menu.checked){
        // alert("deu check")
        nav.classList.add("open")
    }else{
        nav.classList.remove("open")
    }

})