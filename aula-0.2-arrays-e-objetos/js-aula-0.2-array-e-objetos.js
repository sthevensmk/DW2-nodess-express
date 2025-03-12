// ARRAY (Vetor ou Lista)
let produto = [];
console.log(typeof produto);

let produto_2 = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(produto_2);

console.log("Exibindo a lista pelos índices...");
console.log(`1 - ${produto_2[0]}`);
console.log(`2 - ${produto_2[1]}`);
console.log(`3 - ${produto_2[2]}`);
console.log(`4 - ${produto_2[3]}`);

console.log("Exibindo a lista através do FOR...");
for (let c in produto_2) {
  console.log(`${Number(c) + 1} - ${produto_2[c]}`);
}

console.log("Exibindo lista através do forEach...");
produto_2.forEach(function (produto_2) {
  console.log(produto_2);
});

console.log("Exibindo lista através do forEach com os índices...");
produto_2.forEach((produto_2, i) => {
  console.log(`${i + 1} - ${produto_2}`);
});

// Métodos de manipulação de vetores

let vetor = ["Laranja", "Maça", "Banana"];
console.log(`Nosso vetor é o:  ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método PUSH - Insere um novo elemento no FINAL do vetor

vetor.push("Abacaxi");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método UNSHIFT - Insere novov elemento no INÍCIO do vetor

vetor[0] = "Pera";
console.log(`Nosso vetor agora é o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método LENGTH - retorna o número de elementos no vetor

let numeros = [6, 8, 2, 9, 800, 200, 3];
console.log(`Nossa lista de numeros é: ${numeros}`);
console.log(`O número de elementos do vetor é ${numeros.length}.`);

// Método SORT - Ordena o vetor

console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`);
vetor.sort();
console.log(`Agora o primeiro elemento da lisat de frutas é: ${vetor[0]}.`);
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}`);

// Ordenação de números com SORT

console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de números ordenada é: ${numeros}`);

// Ordena de forma CRESCENTE

console.log(numeros.sort((a, b) => a - b));

// Ordena de forma DECRESCENTE

console.log(numeros.sort((a, b) => b - a));

//---------------------------------------------------------------------------------------------------------------------------------------------------

// Objetos literais (não são derivados de classe)
// Objetos possuem Atributos e Métodos
// Lado Esquerdo: chaves / Lado Direito: valores

const pessoa = {};
console.log(typeof pessoa);

const carro = {
  // Atributos
  modelo: "gol",
  cor: "vermelho",
  // Metodos
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando...");
  },
};

console.log(`O modelo do carro é ${carro.modelo}`);
console.log(`A cor do carro é ${carro.cor}`);
carro.acelerar();
carro.frear();

//---------------------------------------------------------------------------------------------------------------------------------------------------

const produto_3 = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 2999.99,
  descricao: "PC moderno com bom desempenho.",
};

console.log(produto_3);
console.log(
  `O ${produto_3.nome} da marca ${produto_3.marca} custa apenas R$${produto_3.preco}. ${produto_3.descricao}`
);

//---------------------------------------------------------------------------------------------------------------------------------------------------

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

// Exibindo o Array de objetos com forEach:

listaProdutos.forEach((produto_l) => {
  console.log(`Produto: ${produto_l.nome}`);
  console.log(`Marca: ${produto_l.marca}`);
  console.log(`Preço: ${produto_l.preco}`);
  console.log(`Descricao: ${produto_l.descricao}`);
  console.log();
});

//console.table
console.table(listaProdutos);
