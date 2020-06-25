// Árvore de busca binária (binary search tree)

// @ts-ignore
class Node {
   constructor(element) {
      this.element = element // Armazenamento
      this.left = null // Subárvore à esquerda
      this.right = null // Subárvore à direita
   }
}

// Classe de árvore binária de busca
class BinarySearchTree {
   
   constructor() {
      this.root = null // Raiz da árvore
   }

   // Inserindo um elemento na árvore
   insert(element) {
      let node = new Node(element)

      // Se ainda não existir raiz, o primeiro nodo
      // será a raiz
      if(this.root === null) this.root = node
      else this.insertNode(this.root, node)
      
   }

   insertNode(root, node) {

      // Novo valor é MENOR que o valor da raiz -> vai para a ESQUERDA
      if(node.element < root.element) {
         // Se a esquerda do nó raiz estiver desocupada, encaixa
         // o novo nó ali
         if(root.left === null) root.left = node
         // Senão, precisamos descer mais à esquerda na árvore
         // Considera agora apenas a subárvore da esquerda
         else this.insertNode(root.left, node)
      }
      // Novo valor é MAIOR que o valor da raiz -> vai para a DIREITA
      else if(node.element > root.element) {
         // Se a esquerda da raiz ainda estiver desocupada, encaixa
         // o novo nó ali
         if(root.right === null) root.right = node
         // Senão, precisamos descer mais à direita
         // Considera apenas a subárvore da direita
         else this.insertNode(root.right, node)
      }
      
   }

   // Percurso em-ordem (in-order traversal)
   inOrderTraversal(root = this.root) {
      if(root !== null) {
         // Exibe todos os valores à esquerda primero
         this.inOrderTraversal(root.left)
         
         // Depois exibe o valor da raiz
         console.log(root.element)
         
         // Por fim, exibe todos os valores à direita
         this.inOrderTraversal(root.right)
      }
   }
}
module.exports = BinarySearchTree

let arvore = new BinarySearchTree()
console.log(arvore)

arvore.insert(17)
console.log(arvore)

arvore.insert(9)
console.log(arvore)

arvore.insert(40)
console.log(arvore)

arvore.insert(11)
console.log(arvore)

arvore.insert(7)
console.log(arvore)

arvore.insert(51)
console.log(arvore)

arvore.insert(39)
arvore.insert(25)
arvore.insert(33)
arvore.insert(20)
arvore.insert(49)
arvore.insert(10)
arvore.insert(0)
arvore.insert(5)

console.log(arvore)
arvore.inOrderTraversal()