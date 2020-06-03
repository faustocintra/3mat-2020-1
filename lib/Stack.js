// """Forma do bolo"""
class Stack {
   constructor() {
      this.items = []
   }

   push(elem) {
      this.items.push(elem)
   }

   pop() {
      return this.items.pop()
   }

}

let pilha = new Stack()

pilha.push(5)
pilha.push(8)

console.log(pilha)



