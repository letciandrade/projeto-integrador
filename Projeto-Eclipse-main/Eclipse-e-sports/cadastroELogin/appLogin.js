document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form')
    var password = document.getElementById('senha')

    form.addEventListener('submit', function(event) {
      event.preventDefault()  //impede o envio do formulário

      var email = document.getElementById('email')

      if (email.value === '' || password.value === '') {
        var messageError = document.getElementById('error')
        messageError.textContent = alert('Por favor preencha todos os campos.')
        return
      }
      window.location.href = '../pages/paginaPrincipal.html' 
      //se o formulário estiver válido, direciona para outra página
    })
})