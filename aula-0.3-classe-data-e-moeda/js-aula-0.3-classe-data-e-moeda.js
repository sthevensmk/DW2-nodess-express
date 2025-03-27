// Classes no JavaScrip

class Carro {
  // Nome de classes devem iniciar com a primeira letra maiúscula.

  // Atributos

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Métodos

  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instância (objeto) de classe Carro

const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é o ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Instância carroEsportivo

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é o ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

// Adiciona um noco atributo

carroEsportivo.corNeon = "Azul";

// Adicionando um novo método

carroEsportivo.turbo = function () {
  return "Vrummmm! O carro está acelerando!!";
};

console.log(
  `O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon de cor ${carroEsportivo.corNeon}`
);

//---------------------------------------------------------------------------------------------------------------------------------------------------
// Manipulando datas no JavaScript

const dataAtual = new Date();

console.log(typeof dataAtual);

// Pegando o dia Atual
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}.`);

// Pegando mês atual
const mes = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mes}.`);

// Pegando o ano atual
const ano = dataAtual.getFullYear();
console.log(`Ano Atual: ${ano}.`);

// Adicionando Dias, Mêses e Anos à Data Atual
// Adicionar 10 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 10);

//Exibe a nova data:
console.log(`Daqui a 10 sera dia ${dataAtual.getDate()}.`);

// Adicionar 3 meses à data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

// Exibe a nova data:
console.log(`Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}.`);

// Adicionar 2 anos a data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

//Exibe o novo ano
console.log(`Daqui a 2 será ${dataAtual.getFullYear()}.`);

//---------------------------------------------------------------------------------------------------------------------------------------------------
// Trabalhando com Moedas no JavaScript

let salario = 2500.3;

console.log(salario);

// Mostrando as casas decimais
console.log(salario.toFixed(2));

// Ocultnado as casas decimais
console.log(salario.toFixed(0));

// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace(".", ","));

// Formatação de moedas
// Mostrando o salário em REAL (R$)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

// Mostrando o salário em DÓLAR (USD)
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD"})
)

// MOstrando o salário em EURO (EUR)
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "EUR"})
)

// Convertendo de Real para Dólar
const salarioDolar = salario * 0.176

console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD"})
)

//---------------------------------------------------------------------------------------------------------------------------------------------------
// Formatação de String

const nome = "Lorenzo Clementino"

//Alternador Para Letras Maiúsculas
console.log(nome.toUpperCase())

// Alternador Para Letras Minúsculas
console.log(nome.toLowerCase())

// Contando Caracteres de uma String
console.log(nome.length)

// Removendo Espaços
const novoNome = nome.replace(/\s/g, "")
console.log(novoNome)
console.log(novoNome.length)







