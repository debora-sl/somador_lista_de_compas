//pegando a lista
const lista = document.querySelector('[data-lista-produto]');

//criando o array de produtos
const valores = [];

//Pegando o botão
const botao = document.querySelector('[data-botao]');
botao.addEventListener('click', ()=>{
    //pegando os inputs nome e valores dos produtos
    const inputNome = document.querySelector('[data-nome-produto]');
    const nome = inputNome.value;
    const inputValor = document.querySelector('[data-valor-produto]');
    const valor = parseFloat(inputValor.value);
  
    criaProduto(nome, valor);


    inputNome.value = "";
    inputValor.value = "";
});

//função que cria o produto via JS
function criaProduto(nome, valor) {
    //criando a div e adicionando a classe
    const novoProduto = document.createElement('div');
    novoProduto.classList.add("principal__lista__produto");

    //criando a li
    const novoNomeDoProduto = document.createElement('li');
    novoNomeDoProduto.innerHTML += nome;
    novoNomeDoProduto.classList.add("principal__lista__produto__nome");

    const novoValorDoProduto = document.createElement('li');
    novoValorDoProduto.innerHTML = valor;
    novoValorDoProduto.classList.add("principal__lista__produto__valor");
    console.log(novoValorDoProduto);

    //colocando o nome e o valor dentro do elemento Novo Produto
    novoProduto.appendChild(novoNomeDoProduto);
    novoProduto.appendChild(novoValorDoProduto);

    //colando o novo produto dentro da lista, visualmente
    lista.appendChild(novoProduto);
    lista.classList.add("principal__lista");
    
    valores.push(novoValorDoProduto);
    var somaValores = 0;
    for (let i = 0; i < valores.length; i++) {
        somaValores += valores[i];
        
    }
  
    const totalCompras = document.querySelector('[data-total]');
    totalCompras.innerHTML = somaValores;
};