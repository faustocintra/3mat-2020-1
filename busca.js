let comps

// vet: vetor (universo de busca)
// busca: valor a ser procurado
function buscaSequencial(vet, busca) {
   for(let i = 0; i < vet.length; i++) {
      comps++
      if(vet[i] == busca) return i
   }
   // Se não encontrou, retorna -1
   return -1
}

function buscaBinaria(vet, busca, posIni = 0, posFim = vet.length - 1) {
   // Math.floor() arredonda o resultado do cálculo para baixo
   const posMeio = Math.floor((posIni + posFim) / 2)

   if(busca == vet[posMeio]) {
      comps++
      return posMeio // Achou
   }
   else if (posIni == posFim) {
      comps += 2
      return -1 // Não existe
   }
   else if (busca < vet[posMeio]) {
      comps += 3
      posFim = posMeio - 1
      return buscaBinaria(vet, busca, posIni, posFim)
   }
   else { // busca > vet[posMeio]
      comps += 3
      posIni = posMeio + 1
      return buscaBinaria(vet, busca, posIni, posFim)
   }
}

let nums = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]

let nomes = require('./amostras/100-mil-nomes')

// Ordenação quick-sort interna do JS
let nomesOrd = nomes.sort((a, b) => a > b ? 1 : -1)

console.log(nomesOrd)

comps = 0
console.log(buscaSequencial(nomesOrd, 'WALDISNEY'))
console.log({comps})

comps = 0
console.log(buscaBinaria(nomesOrd, 'WALDISNEY'))
console.log({comps})
