const Queue2 = require('./lib/Queue2')

let fila = new Queue2()

fila.enqueue('Hermenegildo')
fila.enqueue('Fernandina')
fila.enqueue('Veralice')

console.log(fila)

let atendido = fila.dequeue()

console.log('atendido => ', atendido)
console.log(fila)