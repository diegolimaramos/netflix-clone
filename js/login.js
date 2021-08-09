let btnEntrar = document.querySelector('#btnEntrar');
btnEntrar.addEventListener('click', entrar);

function entrar(e){
    e.preventDefault();
    window.location.href = "user.html";
}