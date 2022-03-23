function validaCampos (email) {
    let tamanhoEmail = email.length;
    if(tamanhoEmail == 0 || tamanhoEmail > 40 || email.indexOf('@')==-1 
    || email.indexOf('.')==-1) {
        console.log('Por favor, digite um endereço de email valido!')
    } else {
        console.log('Tudo OK')
    }
}

const email = document.querySelector('.contato__email').value;

const mensagem = document.querySelector('.contato__mensagem').value;

const botao = document.querySelector('.contato__botao');

botao.onclick = function () {
    validaCampos(email)
    console.log(email)
}





