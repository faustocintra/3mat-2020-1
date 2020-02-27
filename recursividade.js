function fatorial(n) {
   console.log('Valor de n = ' + n)
   if(n < 0) {
      return 0
   }
   else if (n == 1) {
      return 1
   }
   else {
      let fat = n * fatorial(n - 1)
      console.log('Resultado = ' + fat)
      return fat
   }
}
console.log(fatorial(5))