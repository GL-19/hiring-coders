const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    const dados = {
        Nome: nome,
        Email: email
    }

    localStorage.setItem('Informações', JSON.stringify(dados));
    alert("Cadastro realizado com sucesso");
});