console.log("Esta um lindo dia para codar!");


const botao = document.querySelector('[data-botao]');
botao.addEventListener('click', ()=>{
    //pegando o nome e valor do produto
    const inputNomeDoProduto = document.querySelector('[data-nome-produto]');
    const nomeDoProduto = inputNomeDoProduto.value;
    const inputValorDoProduto = document.querySelector('[data-valor-produto]');
    const valorDoProduto = inputValorDoProduto.value;

    console.log(nomeDoProduto);
    console.log(valorDoProduto);

    //pegando a lista de produtos e adiocinando o nome e valor do produto digitados pelos usuário
    const listaDeProdutos = document.querySelector('[data-lista-produto]');
    const novoProduto = document.createElement('li');
    novoProduto.innerHTML = nomeDoProduto;

    const novoValorDoProduto = document.createElement('li');
    novoValorDoProduto.innerText= valorDoProduto;
    const valorProdutoConvertido = parseInt(novoValorDoProduto);


});
