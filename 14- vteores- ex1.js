const listaDeNomes = ["Matheus", "Sophia", "Bella", "Ney" ]
console.log("Exibindo todos os elementos:")
console.log(listaDeNomes)

console.log("Exibindo o primeiro elemento:")
console.log(listaDeNomes[0])

console.log("Adicionando um elemento:")
listaDeNomes.push("Romeu")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o último elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)