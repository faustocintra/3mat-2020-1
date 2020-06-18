// @ts-nocheck
class Node {
   constructor(element) {
      // Armazenamento útil para o usuário
      this.element = element
      // Endereçamento do próximo nodo
      this.next = null
   }
}

class LinkedList {
   constructor() {
      // Início da lista
      this.head = null
      // Contador de nodos
      this.count = 0
   }

   // Acrescentar novos elementos no fim da lista encadeada
   push(element) {
      let newNode = new Node(element)
      
      // Inserção em lista vazia
      // Basta fazer o head apontar para o nodo recém-criado
      if(this.count == 0) this.head = newNode
      else {
         // Inserção em lista que já contêm elementos
         let last = this.head // O último é o primeiro (por enquanto)
         
         // Percorre a cadeia de nodos, até encontar um nodo cujo next
         // seja null (o verdadeiro último)
         while(last.next !== null) last = last.next

         // Faz apontar o último nodo para o novo nodo e este
         // passa a ser o último
         last.next = newNode
      }
      this.count++ // Incrementar o contador de nodos

   }

   // Acrescentar novos elementos em qualquer posição
   insert(element, position) {
      // Validação da posição de inserção
      if(position < 0 || position > this.count) return // Sai sem fazer nada

      // Encontrar a posição para inserção
      
      // Equivale a uma inserção no final da lista
      if(position === this.count || (this.count === 0 && position === 0)) this.push(element)
      else if (position == 0) {
         // Inserção no início da lista (mas a lista não está vazia)
         let newNode = new Node(element)
         
         // 1) Aponta no novo nodo para o head atual
         newNode.next = this.head

         // 2) newNode é o novo head
         this.head = newNode

         this.count++
      } 
      else {
         let elemPos = this.head // Começa do início, já é a posição 0
         
         // Percorrer lista ligada até a posição desejada
         for(let i = 1; i < position; i++) {
            elemPos = elemPos.next
         }

         // Criar o novo nodo
         let newNode = new Node(element)

         // 1) Apontar o novo nodo para o próximo elemento ao
         // da posição de inserção
         newNode.next = elemPos.next

         // 2) Apontar o elemento da posição para o novo elemento
         elemPos.next = newNode

         this.count++

      }

   }

   removeAt(position) {
      // Se posição existe dentro da lista
      if(position >= 0 && position < this.count) {
         // Remoção do head
         if(position === 0) {
            let aux = this.head
            this.head = this.head.next
            this.count--
            return aux.element
         }
         else {
            let curr = this.head
            let ant = null
            for(let i = 1; i <= position; i++) {
               ant = curr
               curr = curr.next
            }
            
            // Aponta o próximo do anterior para o próximo do atual
            ant.next = curr.next
            this.count--
            return curr.element
         }
      }
   }

   // Obtém um elemento qualquer da lista, sem retirá-lo dela
   getElementAt(position) {
      // Se a posição existir
      if(position >= 0 && position < this.count) {
         let node = this.head
         for(let i = 1; i <= position; i++) {
            node = node.next
            
         }
         return node.element
      }
      else // Posição não existe
         return undefined
   }

   // Imprime a lista como uma string
   toString() {
      let pos = 0
      let res = '{ '
      let node = this.head
      while(node) {
         res += `[${pos}] => ${node.element}, `
         node = node.next
         pos++
      }
      res += `}, count = ${this.count}`
      return res
   }

}
module.exports = LinkedList


let list = new LinkedList()

console.log(list.toString())

list.push(14)

console.log(list.toString())

list.insert(7, 0)

console.log(list.toString())

list.insert(5, 1)

console.log(list.toString())

list.push(0)
list.push(-6)
list.push(2)
list.push(1)

console.log(list.toString())

let x = list.removeAt(4)
console.log({x})
console.log(list.toString())

x = list.removeAt(0)
console.log({x})
console.log(list.toString())

x = list.getElementAt(3)
console.log('Elemento na posição 3: ', x)

x = list.getElementAt(0)
console.log('Elemento na posição 0: ', x)

x = list.getElementAt(7)
console.log('Elemento na posição 7: ', x)

x = list.getElementAt(1)
console.log('Elemento na posição 1: ', x)

console.log(list.toString())

