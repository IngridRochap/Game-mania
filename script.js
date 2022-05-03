var menu = document.querySelector(".menu");

menu.addEventListener("click", function(){
    document.querySelector(".linha").classList.toggle("show-menu");
});


var email = document.getElementById("campo-email");

function enviarEmail(){

    let emailDigitado = email.value;
    console.log(emailDigitado)
    window.alert("Email cadastrado")
}
document.querySelector('.linha').addEventListener('click', abrir);

document.querySelector('.linha show-menu').addEventListener('click', fechar);

function abrir(){
    document.querySelector('.linha').style.display = 'block';
    document.querySelector('.linha show-menu').style.display = 'none';
}
function fechar(){
    document.querySelector('.linha').style.display = 'none';
    document.querySelector('.linha show-menu').style.display = 'block';
}