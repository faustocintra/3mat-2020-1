// Classe fila com armazenamento em objeto
class Queue2 {
   
   // Inicialização da fila
   constructor() {
      this.items = {} // Objeto vazio
      this.head = 0 // Início
      this.end = -1 // Fim
   }

   // Enfileiramento
   enqueue(elem) {
      this.end++ // Incrementa o fim
      this.items[this.end] = elem // Adiciona o novo elemento ao fim
   }

   // Defileiramento
   dequeue() {
      if(! this.isEmpty()) {
         let elem = this.items[this.head] // Captura o elemento inicial
         delete this.items[this.head] // Apaga o elemento do objeto
         this.head++
         return elem
      }
      else return undefined
   }

   // Consulta do próximo a sair
   peek() {
      if(! this.isEmpty()) return this.items[this.head]
      else return undefined
   }

   size() {
      return this.end - this.head + 1
   }

   isEmpty() {
      return this.size() === 0
   }

}
module.exports = Queue2
