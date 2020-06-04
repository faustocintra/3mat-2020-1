const Stack = require('./lib/Stack')

let pilha = new Stack()

let texto = 'ESTRUTURAS DE DADOS'

for(let i = 0; i < texto.length; i++) {
   pilha.push(texto.charAt(i))
}

console.log(pilha)

let inverso = ''

while(! pilha.isEmpty()) {
   inverso += pilha.pop()
}

console.log(inverso)