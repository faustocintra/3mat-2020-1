/* Expressão de função tradicional */
/*
let pot2 = function(n) {
   return n * n
}
*/

/* A mesma função acima, escrita como arrow function */

/*
   a) Há apenas um parâmetro, n, então não são necessários
      os parênteses
   b) Somem a palavra-chave function e as chaves, substi-
      tuídos pela flecha (arrow) =>
   c) O corpo da função perde a palavra return
*/
let pot2 = n => n * n

console.log(pot2(5))
console.log(pot2(-7))

/* Outra função tradicional */
/*
let msg = function() {
   return 'Esta função foi executada corretamente'
}
*/

/* Agora no formato de arrow function.
   Como não há parâmetros, voltam os parênteses para "marcar lugar".
*/
let msg = () => 'Esta função foi executada corretamente'

console.log(msg())

/* Função em formato tradicional com 2 parâmetros */
/*
let areaTriangulo = function(base, altura) {
   return base * altura / 2
}
*/

/*
   Agora em formato arrow function.
   A partir de 2 parâmetros, voltam os parênteses.
*/

let areaTriangulo = (base, altura) => base * altura / 2

console.log(areaTriangulo(3, 2.5))
console.log(areaTriangulo(4, 7))

/* Função em formato tradicional tendo mais de 1 instrução no corpo */
/*
let repete = function(str, vezes) {
   let res = ''
   for(let i = 1; i <= vezes; i++) {
      res += str
   }
   return res
}
*/

/* Agora em formato arrow function. Praticamente não há economia de código */
let repete = (str, vezes) => {
   let res = ''
   for(let i = 1; i <= vezes; i++) {
      res += str
   }
   return res   
}

console.log(repete('caju', 10))

/*
   MORAL DA HISTÓRIA: só compensa usar arrow functions quando a função tem apenas
   1 instrução com return (independentemente do número de parâmetros).
*/