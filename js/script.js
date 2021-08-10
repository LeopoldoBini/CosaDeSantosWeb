window.onscroll = function (){
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if(scroll > 20){
        header.classList.add("apretar__nav")
    }else if(scroll < 20){ 
        header.classList.remove("apretar__nav")
    }
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
nav = document.getElementById( "nav");
body = document.getElementById( "contenedorDeTodo");

function mostrar_menu (){

    menu.classList.toggle("mover__contenido");
    body.classList.toggle("mover__contenido");
    nav.classList.toggle("mover__nav");
    
}

window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove("mover__contenido");
        body.classList.remove("mover__contenido");
        nav.classList.remove("mover__nav");

    }
})
