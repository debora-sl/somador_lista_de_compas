console.log("Esta um lindo dia para codar!");


const botao = document.querySelector('[data-botao]');
botao.addEventListener('click', ()=>{
    //pegando o nome e valor do produto
    const inputNomeDoProduto = document.querySelector('[data-nome-produto]');
    const nomeDoProduto = inputNomeDoProduto.value;
    const inputValorDoProduto = document.querySelector('[data-valor-produto]');
    const valorDoProduto = inputValorDoProduto.value;

    //pegando a lista de produtos e adiocinando o nome e valor do produto digitados pelos usuário
    const listaDeProdutos = document.querySelector('[data-lista-produto]');

    const novoProduto = document.createElement('li');
    novoProduto.innerHTML = nomeDoProduto;
    const novoValorDoProduto = document.createElement('li');
    novoValorDoProduto.innerHTML = valorDoProduto;
    listaDeProdutos.appendChild(novoProduto);
    listaDeProdutos.appendChild(novoValorDoProduto);

    const arr = [];
    arr.push(novoValorDoProduto.textContent);
    const soma = 0;
    for (let novoValorDoProduto = 0; novoValorDoProduto < arr.length; novoValorDoProduto++) {
        novoValorDoProduto += arr[novoValorDoProduto];
        
        

    }


    inputNomeDoProduto.value = "";
    inputValorDoProduto.value = "";




});
