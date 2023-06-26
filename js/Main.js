function circulo(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("circulo");
    // la funcion toggle agrega y quita segun los clics
    // classlist hace referencia de todas las clases del elemento capturado (figura)
}

function rectangulo(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("rectangulo");
}

function degrade(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("degrade");
}

function gif(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("gif");
}

function arriba(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("arriba");
}

function abajo(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("abajo");
}

function izquierda(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("izquierda");
}

function derecha(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("derecha");
}

function diagonal(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("diagonal");
}

function animacion(){
    let figura = document.getElementById("figura");

    figura.classList.toggle("animacion");
}

function panel(){
    let figura = document.querySelector(".panel");

    figura.classList.toggle('active');
}

function login(){
    let figura = document.getElementById("modal");

    figura.classList.toggle('activo');
}
