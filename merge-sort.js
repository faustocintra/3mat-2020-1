let comps, chamadas

function juntarVetores(vetEsq, vetDir, fnComp) {
   let pEsq = 0, pDir = 0, resultado = []
   while(pEsq < vetEsq.length && pDir < vetDir.length) {
      //if(vetEsq[pEsq] < vetDir[pDir]) {
      if(fnComp(vetDir[pDir], vetEsq[pEsq])) {
         resultado.push(vetEsq[pEsq])
         pEsq++
      }
      else {
         resultado.push(vetDir[pDir])
         pDir++
      }
      comps++
   }
   let sobra
   if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
   else sobra = vetDir.slice(pDir)
   return resultado.concat(sobra) // resultado + sobra (arrays)
}

function mergeSort(vet, fnComp) {
   chamadas++
   if(vet.length > 1) {
      let meio = Math.floor(vet.length / 2)
      let vetEsq = vet.slice(0, meio)
      let vetDir = vet.slice(meio)
      vetEsq = mergeSort(vetEsq, fnComp)
      vetDir = mergeSort(vetDir, fnComp)
      vet = juntarVetores(vetEsq, vetDir, fnComp)
   }
   return vet
}

/* let nums = [9, 8, 7, 6, 2, 1, 0, 10, 11, 5, 4, 3]

comps = 0, chamadas = 0
console.log(mergeSort(nums, (a, b) => a < b))
console.log({comps, chamadas}) */

//let nomes = require('./amostras/100-mil-nomes')
let covid = require('./amostras/covid')

// Filtrando registros sem nome de cidade
covid = covid.filter(r => r.city != '')

comps = 0, chamadas = 0
console.time('merge-sort')
// console.log(mergeSort(covid, (a, b) => a.city < b.city))

// Usando comparação de strings INSENSÍVEL a acentos
console.log(mergeSort(covid, (a, b) => a.city.localeCompare(b.city, 'pt') > 0))

console.timeEnd('merge-sort')
console.log({comps, chamadas})
console.log(covid.length)