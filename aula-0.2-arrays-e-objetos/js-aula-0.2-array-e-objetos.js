// ARRAY (Vetor ou Lista)
let produto = []
console.log(typeof(produto))

let produto_2 = ["Computador", "Notebook", "Celular", "Tablet"]
console.log(produto_2)

console.log("Exibindo a lista pelos índices...")
console.log(`1 - ${produto_2[0]}`)
console.log(`2 - ${produto_2[1]}`)
console.log(`3 - ${produto_2[2]}`)
console.log(`4 - ${produto_2[3]}`)

console.log("Exibindo a lista através do FOR...")
for (let c in produto_2){
    console.log(`${Number(c) + 1} - ${produto_2[c]}`)
}

console.log("Exibindo lista através do forEach...")
produto_2.forEach(function (produto_2){
    console.log(produto_2)
})

console.log("Exibindo lista através do forEach com os índices...")
produto_2.forEach((produto_2, i ) =>{
    console.log(`${i + 1} - ${produto_2}`)
})