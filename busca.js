let comps

// vet: vetor (universo de busca)
// busca: valor a ser procurado
function buscaSequencial(vet, busca, fnComp) {
   for(let i = 0; i < vet.length; i++) {
      comps++
      // if(vet[i] == busca) return i
      if(fnComp(busca, vet[i]) == 0) return i
   }
   // Se não encontrou, retorna -1
   return -1
}

// vet: vetor (universo de busca)
// busca: valor a ser procurado
// posIni: posição inicial do subvetor de busca (padrão: 0)
// posFim: posição final do subvetor de busca (padrão: última posição)
function buscaBinaria(vet, busca, fnComp, posIni = 0, posFim = vet.length - 1) {
   // Math.floor() arredonda o resultado do cálculo para baixo
   const posMeio = Math.floor((posIni + posFim) / 2)

   let resultadoComp = fnComp(busca, vet[posMeio])

   //if(busca == vet[posMeio]) {
   if(resultadoComp == 0) {
      comps++
      return posMeio // Achou
   }
   else if (posIni == posFim) {
      comps += 2
      return -1 // Não existe
   }
   else if (resultadoComp < 0) {
      comps += 3
      posFim = posMeio - 1
      return buscaBinaria(vet, busca, fnComp, posIni, posFim)
   }
   else { // fnComp(busca, vet[posMeio]) > 0
      comps += 3
      posIni = posMeio + 1
      return buscaBinaria(vet, busca, fnComp, posIni, posFim)
   }
}

let nums = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]

//let nomes = require('./amostras/100-mil-nomes')

// Ordenação quick-sort interna do JS
//let nomesOrd = nomes.sort((a, b) => a > b ? 1 : -1)

let objNomes = require('./amostras/100-mil-objetos')

function comparaFirstName(busca, elemVet) {
   // Uma função de comparação para busca precisa retornar um
   // dos seguintes valores:
   // 0, se a == b
   // (um número positivo, ex. 1), se a > b
   // (um número negativo, ex. -1) se a < b
   if(busca == elemVet.first_name) return 0
   else if (busca > elemVet.first_name) return 1
   else return -1
}

/* console.log(nomesOrd)

comps = 0
console.log(buscaSequencial(nomesOrd, 'WALDISNEY'))
console.log({comps})

comps = 0
console.log(buscaBinaria(nomesOrd, 'WALDISNEY'))
console.log({comps}) */

//console.log(objNomes)

comps = 0
console.time('sequencial')
console.log(buscaSequencial(objNomes, 'WALDISNEY', comparaFirstName))
console.timeEnd('sequencial')
console.log({comps})

comps = 0
console.time('binaria')
console.log(buscaBinaria(objNomes, 'WALDISNEY', comparaFirstName))
console.timeEnd('binaria')
console.log({comps})