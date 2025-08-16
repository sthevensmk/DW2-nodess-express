function meusDados(nome, idade, cidade) {
    console.log(`Olá, eu sou o ${nome} tenho ${idade} anos e moro em ${cidade}.`)
}
let nome = "Sthevens Konesuk Miranda dos Santos"
let idade = 20
let cidade = "Registro-SP"
meusDados(nome, idade, cidade)

const divisao = (num1, num2) => {
    return num1 / num2
}
console.log(`O resultado da divisão foi: ${divisao(10,5)}`)

const multi = (num1, num2, num3) => {
    return num1 * num2 * num3
}
console.log(`O resultado da mutiplicação dos 3 números é: ${multi(9,8,7)}`)

function verificaIdade(x) {
    if (x >= 18) {
      return "maior de idade";
    } else {
      return "menor de idade";
    }
  }
  console.log(`A pessoa com ${idade} anos, é ${verificaIdade(idade)}!`);

let media = function (nota1, nota2) {
    let Media =  (nota1 + nota2) / 2
    if(Media <= 5) {
        return "Reprovado"
    } else {
        return "Aprovado"
    }
} 
let nota1 = 7
let nota2 = 9
console.log(`O aluno está ${media(nota1, nota2)}`)

const triplo = x => {
    return x * 3
}
let triplicar = 5
console.log(`O triplo do numero ${triplicar} é: ${triplo(triplicar)}`)

const somar = (num1, num2, num3, num4) => {
    return num1 + num2 + num3 + num4
}
let num1 = 5
let num2 = 10
let num3 = 8
let num4 = 12
console.log(`${somar(num1, num2, num3, num4)}`)

const saudando = (function (nome){
    console.log(`Olá, seja muito bem-vindo ${nome}`)
}) (nome)