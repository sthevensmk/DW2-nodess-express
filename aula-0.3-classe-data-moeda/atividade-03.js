class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "está correndo";
  }
  andar() {
    return "está andando";
  }
  atacar() {
    return "está atacando";
  }
  defender() {
    return "está defendendo";
  }
}

const HomemAranha = new Heroi("Homem-Aranha", "75", "Média", "80");
HomemAranha.teia = 1;
HomemAranha.sentidoAranha = function () {
  return "detectou perigo!";
};

const SuperMan = new Heroi("Superman", "100", "Alta", "100");
SuperMan.podeVoar = 0;
SuperMan.visaoCalor = function () {
  return "usando sua visão de calor!";
};

const Batman = new Heroi("Batman", "85", "Alta", "95");
Batman.esconder = 1;
Batman.investigar = function () {
  return "investigando um crime!";
};

console.log(`O ${HomemAranha.nome} que tem ${HomemAranha.vida} de vida e com uma força ${HomemAranha.forca} ${HomemAranha.correr()} com uma velocidade ${HomemAranha.velocidade}.`)
console.log(`O ${SuperMan.nome} que tem ${SuperMan.vida} de vida e com uma força ${SuperMan.forca} ${SuperMan.atacar()} ${SuperMan.visaoCalor()}`)
console.log(`O ${Batman.nome} que tem ${Batman.vida} de vida e com uma força ${Batman.forca} ${Batman.andar()} ${Batman.investigar()}`)


/////////////////////////////////////////////////////////////////////////
const mostrarData = (data) => {
  data.setDate(data.getDate() + 3);
  data.setMonth(data.getMonth() + 2);
  data.setFullYear(data.getFullYear() + 1);

  console.log(
    `Data: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  );
};
const pegarData = new Date();
mostrarData(pegarData);
/////////////////////////////////////////////////////////////////////////
const converterMoeda = (valor) => {
  console.log(
    valor.toLocaleString("EN", { style: "currency", currency: "USD" })
  );
  console.log(
    valor.toLocaleString("pt-br", { style: "currency", currency: "EUR" })
  );
};
let salario = 5260.12;
converterMoeda(salario);
/////////////////////////////////////////////////////////////////////////
const manipulandoCaracteres = (name) => {
  console.log(name.toUpperCase());
  console.log(name.toLowerCase());
  console.log(name.length);
};
let meuNome = "Sthevens Konesuk Miranda dos Santos";
manipulandoCaracteres(meuNome);