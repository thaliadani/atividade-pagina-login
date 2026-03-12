const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('btn-entrar');
const btnMostrarSenha = document.getElementById('mostrar-senha');

let usuario = 'admin';
let senha = '12345678';

btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputUsuario.value === usuario && inputSenha.value === senha) {
        window.location.href = './src/pages/inicio.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});

btnMostrarSenha.addEventListener('click', () =>{

    if (inputSenha.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        btnMostrarSenha.className ='iconoir-eye-closed';
    } else {
        input.setAttribute('type', 'password');
        btnMostrarSenha.className ='iconoir-eye-solid';
    }
});
