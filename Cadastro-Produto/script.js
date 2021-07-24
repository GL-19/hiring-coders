const form = document.getElementById('formulario-produto');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome-produto').value;
    let tipo = document.getElementById('tipo-produto').value;
    let preco = document.getElementById('preco-produto').value;
    let quantidade = document.getElementById('quantidade-produto').value;
    const dados = {
        Nome: nome,
        Tipo: tipo,
        Preco: preco, 
        Quantidade: quantidade
    }
    console.log(dados);
    const stringProdutos = localStorage.getItem('listaProdutos');
    let listaProdutos = [];
    if(stringProdutos !== null) {
        const listaProdutosAntiga = JSON.parse(stringProdutos);
        listaProdutos = [...listaProdutosAntiga];
    } 
    listaProdutos.push(dados);
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos));
    alert("Cadastro realizado com sucesso");
});