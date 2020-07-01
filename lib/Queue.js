// Classe fila
class Queue {

   // Inicialização
   constructor() {
      this.items = []
   }

   // Colocar um novo elemento na fila
   enqueue(elem) {
      this.items.push(elem)
   }

   // Retirada de um elemento da fila
   dequeue() {
      if(! this.isEmpty()) return this.items.shift()
      else return undefined
   }

   // Consulta do primeiro elemento da fila
   peek() {
      if(! this.isEmpty()) return this.items[0]
      else return undefined
   }

   // Destruir a fila
   clear() {
      this.items = []
   }

   // Consulta o tamanho da fila
   size() {
      return this.items.length
   }

   // Retorna se a fila está ou não vazia
   isEmpty() {
      return this.items.length === 0
   }
}
module.exports = Queue

let fila = new Queue()

fila.enqueue('José')
fila.enqueue('Maria')
fila.enqueue('Jurema')
fila.enqueue('Waldisney')

console.log(fila)

console.log(fila.items.length)