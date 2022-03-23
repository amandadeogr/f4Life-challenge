document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const btn = document.getElementById('add');
    const nome = document.getElementById('nome');
    const texto = document.getElementById('text');

    
    function validacaoEmail () {
        const regex = /^([a-z0-9A-Z]){1,32}([@]){1}([a-z]){1,16}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
        const testeEmail = regex.test(email.value); 

        if(!testeEmail) {
            alert('Erro no envio: Endereço de email inválido')
        } else if(testeEmail && email.value && message.value && nome.value) {
            texto.textContent = `Obrigada pelo contato, ${nome.value}!`
        }
    }

    function verificaCampos () {
        if(email.value === '') {
            alert('Email não preenchido')
        }
        else if (nome.value === '') {
            alert('Nome não preenchido')
        }
        else if (message.value === '' ) {
            alert('Erro no envio: Insira uma mensagem')
        }
        else if (email.value === '' || message.value === '' ) {
            alert('É necessário que voce preencha todos os campos.')
        }
    }

    function botaoHandler(event){
        event.preventDefault()
    }

    btn.onclick = function () {
        validacaoEmail(email)
        verificaCampos()
        botaoHandler(event)
        focus
    } 

    // btn.onclick = addMensagem;
    
})