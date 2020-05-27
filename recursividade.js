function f(n) {
   console.log('Valor de n = ' + n)
   if(n < 0) {
      return 0
   }
   else if (n == 1) {
      return 1
   }
   else {
      let fat = n * f(n - 1)
      console.log('Resultado = ' + fat)
      return fat
   }
}
console.log(f(5))

function potenc(n, p) {
   console.log('Valor de p = ' + p)
   if (p < 0) return undefined
   else if (p == 0) return 1
   else {
      let pot = n * potenc(n, p - 1)
      console.log('Resultado = ' + pot)
      return pot
   }
}
console.log(potenc(2, 5))