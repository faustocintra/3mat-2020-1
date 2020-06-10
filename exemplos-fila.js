//const Queue = require('./lib/Queue')
const Queue = require('./lib/Queue2')

let fila = new Queue()

console.log(fila)

fila.enqueue('Geraldo')
fila.enqueue('Marta')
fila.enqueue('João')
fila.enqueue('Tibúrcio')
fila.enqueue('Asdrúbal')

console.log(fila)

let proximo = fila.peek()
console.log('próximo =>', proximo)

console.log(fila)

let atendido = fila.dequeue()
console.log('atendido => ', atendido)

console.log(fila)

fila.enqueue('Jeruza')
fila.enqueue('Salustiano')

console.log(fila)

atendido = fila.dequeue()
console.log('atendido => ', atendido)

console.log(fila)