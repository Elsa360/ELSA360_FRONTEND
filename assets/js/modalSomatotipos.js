let cerrar = document.querySelectorAll(".closeModalSomatotipos")[0];
let abrir = document.querySelectorAll(".CTA-Modal")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".container-modal")[0]; 

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },700);    
});



// Esta porción de codigo es para evitar o permitir que cierrre el modal dandole click afuera del modal

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },700);
    }
}); 



















let cerrar2 = document.querySelectorAll(".closeModalEscalaDeportiva")[0];
let abrir2 = document.querySelectorAll(".CTA-ModalEscalaDeportiva")[0];
let modal2 = document.querySelectorAll(".modalEscalaDeportiva")[0];
let modalC2 = document.querySelectorAll(".container-modalEscalaDeportiva")[0]; 

abrir2.addEventListener("click", function(e){
    e.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-closeEscalaDeportiva");
});

cerrar2.addEventListener("click", function(){
    modal2.classList.toggle("modal-closeEscalaDeportiva");
    setTimeout(function(){
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";
    },700);    
});

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC2){
        modal2.classList.toggle("modal-closeEscalaDeportiva");
        setTimeout(function(){
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";
        },700);
    }
}); 




















let cerrar3 = document.querySelectorAll(".closeModalDisclaimerGenero")[0];
let abrir3 = document.querySelectorAll(".CTA-ModalDisclaimerGenero")[0];
let modal3 = document.querySelectorAll(".modalDisclaimerGenero")[0];
let modalC3 = document.querySelectorAll(".container-modalDisclaimerGenero")[0]; 

abrir3.addEventListener("click", function(e){
    e.preventDefault();
    modalC3.style.opacity = "1";
    modalC3.style.visibility = "visible";
    modal3.classList.toggle("modal-closeDisclaimerGenero");
});

cerrar3.addEventListener("click", function(){
    modal3.classList.toggle("modal-closeDisclaimerGenero");
    setTimeout(function(){
        modalC3.style.opacity = "0";
        modalC3.style.visibility = "hidden";
    },700);    
});

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC3){
        modal3.classList.toggle("modal-closeDisclaimerGenero");
        setTimeout(function(){
            modalC3.style.opacity = "0";
            modalC3.style.visibility = "hidden";
        },700);
    }
}); 