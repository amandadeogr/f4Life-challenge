document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email').value
    const message = document.getElementById('message')
    const btn = document.getElementById('add')
    const form = document.getElementById('form')

    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    function addMessage(email){
        if(email.value === '' || message.value === '' || regexp.test(email) === false){
            alert('email and description are required')
        } else{
            let allMessage = 'Obrigado pelo contanto ' + email.value + '!'
            alert(allMessage)
        }

        console.log(email.value == regexp)
        console.log(regexp.test(email))
    }

    

    btn.onclick = addMessage


    // event.preventDefault()
})