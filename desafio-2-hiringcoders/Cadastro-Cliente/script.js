const form = document.getElementById('formulario-cliente');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome-cliente').value;
    let email = document.getElementById('email-cliente').value;
    let telefone = document.getElementById('telefone-cliente').value;
    let endereco = document.getElementById('endereco-cliente').value;
    const dados = {
        nome: nome,
        email: email,
        telefone: telefone, 
        endereco: endereco
    }
    console.log(dados);
    const stringClientes = localStorage.getItem('listaClientes');
    let listaClientes = [];
    if(stringClientes !== null) {
        const listaClientesAntiga = JSON.parse(stringClientes);
        listaClientes = [...listaClientesAntiga];
    } 
    listaClientes.push(dados);
    localStorage.setItem('listaClientes', JSON.stringify(listaClientes));
    alert("Cadastro realizado com sucesso");
});