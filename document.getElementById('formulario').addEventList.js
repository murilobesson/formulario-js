document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    var regexNome = /^[A-Za-zÀ-ú\s]{1,100}$/;
    if (!regexNome.test(nome)) {
        alert('Por favor, insira um nome válido sem números.');
        return;
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    var regexTelefone = /^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
    if (!regexTelefone.test(telefone)) {
        alert('Por favor, insira um telefone válido com DDD (padrão brasileiro).');
        return;
    }

    alert('Formulário enviado com sucesso!');
});