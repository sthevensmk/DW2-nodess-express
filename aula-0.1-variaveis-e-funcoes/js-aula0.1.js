// Comentário em Linha JS
/*  Comentario
    Em
    Bloco      */ 
// CTRL + ; - Atalho pra comentario

// Declaração de variáveis no JS
// CONST x LET x VAR

const nome = "Sthevens K.M" // CONST - O valor não muda, pode ser iniciada vazia.
let Nome // LET - O Valor pode ser flexivel, pode ser iniciada vazia.
// const nome = "Louco" -> Resulta em Erro.
// let Nome -> Resulta em Erro.
var cor = "Azul"
var cor = "Amarelo"
let cidade = "Registro"
cidade = "Jacupiranga" //Let permite alterar o valor.

const message = "Hello, World! Iniciando estudos com Javascript!"
console.log(message);

//Typeof (exibe o tipo da variável)
const estado = "SP";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
//O JS possui tipagem fraca e dinâmica

//TIPOS DE FUNÇÕES NO JAVASCRIPT

function myfunc() {
  console.log(typeof myfunc);
}

//FUNÇÃO SIMPLES
function saudacao() {
  console.log("Olá, bem-vindo!");
}

//FUNÇÃO COM PARAMETRO/ARGUMENTO
function saudacao(nome) {
  //<--PARÂMETRO
  console.log(`Olá, bem-vindo ${nome}`);
}
saudacao("Diego"); //ARGUMENTO

//FUNÇÃO COM MAIS DE UM PARÂMETRO
function soma(n1, n2) {
  let resultado = n1 + n2;

  console.log(`A soma dos dois números foi ${resultado}`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

//FUNÇÃO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}
Soma(2, 6);
console.log(`A soma dos dois números foi ${Soma(2, 6)}.`);

//FUNÇÃO COM MAIS DE UM RETORNO
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

//FUNÇÃO ANÔNIMA
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(25));
console.log(`O dobro do número é ${dobro(15)}!`);

// ARROW FUNCTION COM PARÂMETRO ÚNICO
// FUNÇÃO FLECHA
const Dobro = (x) => {
    return x*2;
}
console.log(`Função dobro com Arrow Function. Resultado: ${Dobro(20)}`);

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação é ${calc(6, '*', 6)}.`)

//SIMPLIFICANDO ARROW FUNCTION
const Calc = (num1, operador, num2) => eva(`${num1}`)


//IIFE - (função imediata) 0 última \o/
const iife = (function() {
    console.log("Estou sendo executada imediatamente...")
})();

//IIFE COM PARÂMETRO
const start = (function(app) {
    console.log(`Executando imediatamente o app ${app}`)
})("Whatsapp")
