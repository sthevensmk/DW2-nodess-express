// Comentários em JS
/*Comentários em
 bloco com
 JS*/

const nome = "Sthevens Konesuk Miranda dos Santos";
let Nome;
var cor = "Preto";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga";

const message = "Hello World! Iniciando estudos com JavaSript!";
console.log(message);

let metas = ["Passar de ano", "False"];
// console.log(metas[0] + " " + metas[1])

let meta = {
  value: "Ler um livro todo mês",
  checked: false,
};
// console.log(meta.value, meta.checked)

if (meta.checked == true) {
  console.log("Meta concluida!");
} else {
  console.log("Meta não concluida!");
}
// typeof (esse comando exibira o tipo da variável);
const estado = "SP";
const idade = 18;
let endereco;

console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);

////////////////////////////////////////////////////////////////////////////

// TIPOS DE FUNCTIONS NO JS

function minhaFuncao() {}
//  console.log(typeof(minhaFuncao))

// FUNÇÃO SIMPLES
function saudacao() {
  console.log("Olá, Bem-Vindo!");
}
saudacao();

// FUNÇÃO COM PARAMETRO/ARGUMENTO
// PARAMETRO -> É um dado que a função recebe.
// ARGUMENTO -> É um dado que é enviado para a função.

function Saudacao(nome) {
  // Parametro
  console.log("Olá, Bem-Vindo " + nome);
  // Usando TEMPLATE STRINGS
  console.log(`Olá, Bem-Vindo ${nome}`);
  // ${} -> Placeholder
}
Saudacao("Cristhian Hatzman Trigo"); // Argumento

// FUNÇÃO COM MAIS DE UM PARAMETRO
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números é ${resultado}.`);
}
let n1 = 10;
let n2 = 20;
soma(n1, n2);

// FUNÇÃO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos 2 numeros foi: ${Soma(2, 6)}.`);

// FUNÇÃO COM MAIS DE UM RETORNO
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
let num = 1;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

// FUNÇÃO ANÔNIMA
let dobro = function (x) {
  return x * 2;
};

// ARROW FUNCTION COM PARÂMETRO
const Dobro = (x) => {
  return x * 2;
};
console.log(`Função dobro com Arrow function. Resultado: ${Dobro(10)}`);

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
console.log(`O resultado da operação é: ${calc(6, "*", 6)}`);

// SIMPLIFICANDO ARROW FUNCTION
const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);
console.log(`O resultado da operação é: ${Calc(6, "*", 10)}`);

// IIFE - Immediately Invoked Function Expression
// FUNÇÃO IMEDIATA
const iife = (function () {
  console.log("Estou sendo executada imediatamente...");
})();

//IIFE COM PARAMETRO
const start = (function (app) {
  console.log(`Executando imediatamente o app ${app}.`);
})("WhatsApp");
