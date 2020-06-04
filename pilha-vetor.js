// Inicializar uma pilha
let pilha = []  // Vetor vazio

let n = 47

while(n > 0) {
   pilha.push(n % 2) // Empilha o resto da divisão
   n = Math.floor(n / 2) // Pega apenas a parte inteira da divisão
}

console.log(pilha)

let binario = ''
while(pilha.length > 0) {
   binario += pilha.pop()
}

console.log(binario)