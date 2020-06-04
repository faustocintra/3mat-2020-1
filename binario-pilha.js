// Importando a classe Stack que está em outro arquivo
const Stack = require('./lib/Stack')

let p = new Stack()

let n = 100
let n2 = n

while(n > 0) {
   p.push(n % 2)
   n = Math.floor(n / 2)
}

//console.log(p)

let binario = ''
while(! p.isEmpty()) {
   binario += p.pop()
}

console.log(n2 + ' em binário é ' + binario)