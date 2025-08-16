// ARRAY (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos indices...");
console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);
console.log(
  `1 - ${Produtos[0]} 2 - ${Produtos[1]} 3 - ${Produtos[2]} 4 - ${Produtos[3]}`
);

console.log("Exibindo a lista através do FOR...");
for (let i in Produtos) {
  console.log(`${Number(i) + 1} - ${Produtos[i]}`);
}
// Altera a variável i para Number para contagem começar em 1 no front para o usuário

console.log("Exibindo a lista através do FOR EACH...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo a lista através do FOR EACH COM INDICES...");
Produtos.forEach((produto, c) => {
  console.log(`${c + 1} - ${produto}`);
});

// Metodos de manipulação de vetores
let vetor = ["Laranja", "Maçã", "Banana"];
console.log(`Nosso vetor é o ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor é o: ${vetor}`);

// Método PUSH - Insere um novo elemento no final do vetor
vetor.push("Abacaxi");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método UNSHIFT - Insere novo elemento no inicio do vetor
vetor[0] = "Pera";
console.log(`Nosso vetor agora é o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método LENGTH - Retorna o número de elementos de um vetor
let numeros = [6, 8, 2, 4, 5, 9, 1, 800, 200];
console.log(
  `Nossa lista de numeros é: ${numeros} o tamanho dela é ${numeros.length}!`
);

// Método SORT - Ordenar o vetor
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`);
vetor.sort();
console.log(`Agora o primeiro elemento da lista de frutas é: ${vetor[0]}.`);
console.log(`Nossa lsta de frutas ordenadas é: ${vetor.sort()}.`);

// Ordenação de números com SORT
console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de numeros ordenada é: ${numeros}`);

// Ordenando de forma CRESCENTE
console.log(numeros.sort((a, b) => a - b));

// Ordenando de forma DECRESCENTE
console.log(numeros.sort((a, b) => b - a));

// /////////////// /////////////// /////////////// /////////////// /////////////// /////////////
// OBJETOS LITERAIS (Não são derivados de classes)

const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  // Métodos
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando...");
  },
};
console.log(`O modelo do carro é: ${carro.modelo}`);
console.log(`A cor do carro é: ${carro.cor}`);
carro.acelerar();
carro.frear();

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho",
};
console.log(produto);
console.log(
  `O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}. ${produto.descricao}`
);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// Array de objetos

const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultra resistente. Muito barato!",
  },
];

listaProdutos.forEach(produto => {
    console.log(`Produto ${produto.nome}`)
    console.log(`Marca ${produto.marca}`)
    console.log(`Preço ${produto.preco}`)
    console.log(`Descrição ${produto.descricao}`)
    console.log()  
})

console.table(listaProdutos)