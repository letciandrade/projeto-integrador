document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form')
    var password = document.getElementById('senha')
    var passwordAgain = document.getElementById('senhaNovamente')

    form.addEventListener('submit', function(event) {
      event.preventDefault() //impede o envio do formulário

      var email = document.getElementById('email')

      if (email.value === '' || password.value === '' || passwordAgain.value === '') {
        var messageError = document.getElementById('error')
        messageError.textContent = alert('Por favor preencha todos os campos.')
        return
      }

      if (password.value !== passwordAgain.value) {
        var messageError = document.getElementById('error')
        messageError = alert('As senhas digitadas não coincidem. ')
        document.getElementById('senhaNovamente').value = ''
        return
      }
      window.location.href = '../pages/paginaPrincipal.html' 
      //se o formulário estiver válido, direciona para outra página
    });
  });