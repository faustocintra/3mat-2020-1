// Classe pilha
class Stack {
   
   // Inicializa a pilha vazia
   constructor() {
      this.items = []
   }

   // Colocar um novo elemento na pilha
   push(elem) {
      this.items.push(elem)
   }

   // Retira um elemento da pilha
   pop() {
      if(! this.isEmpty()) return this.items.pop()
      else console.log('ERRO: Pilha já vazia')
   }

   // Verificar (sem retirar) qual é o elemento do topo da pilha
   peek() {
      return this.items[this.items.length - 1]
   }

   // Verificar o tamanho da pilha
   size() {
      return this.items.length
   }

   // Retorna se a pilha está ou não vazia
   isEmpty() {
      return this.items.length === 0
      // return this.size() === 0 // Alternativa
   }

   // Limpar a pilha e começar de novo
   clear() {
      // Chamar o constructor
      this.items = []  
   }

}
module.exports = Stack

/* 
// Criação e inicialização da pilha
let pilha = new Stack()

// Colocados alguns elementos
pilha.push(5)
pilha.push(8)
pilha.push(4)
pilha.push(0)
pilha.push(1)
pilha.push(3)

// Exibindo o estado da pilha
console.log(pilha)

let x = pilha.pop()
let y = pilha.peek()

console.log(pilha)
console.log('x => ', x)
console.log('y => ', y)
console.log(pilha)
console.log('tamanho da pilha => ', pilha.size())

let novaPilha = new Stack()

console.log('novaPilha está vazia?', novaPilha.isEmpty())
console.log('Tamanho de novaPilha', novaPilha.size())

novaPilha.push('Alberto')

console.log('novaPilha está vazia?', novaPilha.isEmpty())
console.log('Tamanho de novaPilha', novaPilha.size())

// Destruindo a pilha
console.log(pilha)
pilha.clear()
console.log(pilha)
 */



