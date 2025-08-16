// CLASSES NO JAVASCRIPT
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  buzinar() {
    return "beep, beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

const carroEsportivo = new Carro();
carroEsportivo.marca = "Fiat Uno com Escada";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroPopular.buzinar()}`
);

carroEsportivo.corNeon = "Azul";
carroEsportivo.turbo = function () {
  return "Vrutututummmmmm, o carro está acelerando!!!";
};
console.log(
  `O carro ${carroEsportivo.marca} modelo ${
    carroEsportivo.modelo
  } tem neom da cor ${carroEsportivo.corNeon} e esta ${carroEsportivo.turbo()}`
);

/////////////////////////////////////////// MANIPULANDO DATAS NO JAVASCRITP /////////////////////////////////////////////

// Date(): Classe nativa do JS

const datatual = new Date(); // objeto datatual herda todos os comandos da classe date
console.log(typeof datatual);

//Pegando o dia atual
const dia = datatual.getDate();
console.log(`Hoje é dia ${dia}`);

//Pegando o mes atual
const mes = datatual.getMonth() + 1;
console.log(`Estamos no mes ${mes}`);

//Pegando o ano atual
const ano = datatual.getFullYear();
console.log(`Estamos no ano ${ano}`);

//ADICIONANDO MESES, DIAS E ANOS NA DATA ATUAL

//ADICIONAR 10 DIAS NA DATA ATUAL
datatual.setDate(datatual.getDate() + 10);

// Exibe a nova data
console.log(`Daqui a 10 dias será dia ${datatual.getDate()}`);

// Adicionar 3 meses á data atual
datatual.setMonth(datatual.getMonth() + 3);

// Exite a data nova
console.log(`Daqui a 3 meses será mês ${datatual.getMonth() + 1}`);

// Adicionar 2 anos a data atual
datatual.setFullYear(datatual.getFullYear() + 2);

// Exibe a nova data
console.log(`Daqui a 2 anos será ${datatual.getFullYear()}`);

/////////////////////////////////////////////////////////////////////
// TRABALHANDO COM MOEDAS NO JAVASCRIPT

let salario = 2500.3;
console.log(salario);
// Mostrando as casas decimais
console.log(salario.toFixed(2));
// Ocultando as casas decimais
console.log(salario.toFixed(0));
// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace(".", ","));

// Formatação de moedas
// Mostrando o salário em REAL (R$)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);
// Mostrando o salário em DOLAR (US$)
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);
// Mostrando o salário em EUROS (EUR)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "EUR" })
);
// Mostrando o salário em RUBLOS (RUB)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "RUB" })
);

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario * 0.176;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

/////////////////////////////////////////////////////////////////////
// FORMATAÇÃO DE STRINGS
const nome = "Sthevens Konesuk Miranda dos Santos";

// ALTERNANDO PARA LETRAS MAIUSCULAS
console.log(nome.toUpperCase())
// ALTERNANDO PARA LETRAS MINUSCULOS
console.log(nome.toLowerCase())

// CONTANDO OS CARACTERES DE UMA STRING
console.log(nome.length)

// REMOVENDO ESPAÇOS
const novoNome = nome.replace(/\s/g, "") // EXPRESSÃO RESEX (/\s/g - representa o caractere do espaço e faz o replace por "")
console.log(novoNome)
console.log(novoNome.length)