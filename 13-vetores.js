const listaDeNomes = ["João", "Maria", "José" ]
console.log("Exibindo todos os elementos:")
console.log(listaDeNomes)

console.log("Exibindo o primeiro elemento:")
console.log(listaDeNomes[0])

console.log("Adicionando um elemento:")
listaDeNomes.push("Marilia")
console.log(listaDeNomes)

// Sua vez, adicione mais um nome na lista.

console.log("Adicionando um elemento:")
listaDeNomes.push("Neymar")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento: ")
// A partir do indice 2, remover 1 apenas elemento.
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

// Sua vez, remova apenas o segundo elemento da lista.
console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(1,1)
console.log(listaDeNomes)


console.log("\nRemovendo apenas o último elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)
