/*
   Parâmetros:
   vet: o vetor onde será operada a troca (passagem por referência)
   i, j: as posições do vetor que serão trocadas entre si
*/
function troca(vet, i, j) {
   //console.log(`vet[i] = ${vet[i]}, vet[j] = ${vet[j]}`)
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
   //console.log(`vet[i] = ${vet[i]}, vet[j] = ${vet[j]}`)
}

let comps, pass, trocas
function bubbleSort(vet, fnComp) {
   let trocou
   do {
      pass++
      trocou = false
      // O for do bubble sort precisa terminar
      // no PENÚLTIMO elemento (i < vet.length - 1)
      for(let i = 0; i < vet.length - 1; i++) {
         comps++
         // Se o elemento posterior (i + 1) for menor que o atual
         //if(vet[i + 1] < vet[i]) {
         if(fnComp(vet[i], vet[i + 1])) {
            troca(vet, i, i + 1)
            trocou = true
            trocas++
         }
      }
   } while(trocou)
}

let covid = require('./amostras/covid-dia1305')

function comparaCity(a, b) {
   return a.city > b.city
}

bubbleSort(covid, comparaCity)

console.log(covid)
console.log(covid.length)

// Retornar true se a > b
// false se contrário
/* function comparaNumeros(a, b) {
   // console.log({a, b})
   return a > b
}

let nums = [7, 4, 1, 9, 0, 3, 6, 8, 2, 5]

bubbleSort(nums, comparaNumeros)

console.log(nums) */

/* let nomes = require('./amostras/100-mil-nomes')

comps = 0
trocas = 0
pass = 0

console.time('bubble-sort') // Marca a hora de início
//bubbleSort(nums)
bubbleSort(nomes)
console.timeEnd('bubble-sort') // Marca o horário final e exibe a diferença

//console.log(nums)
console.log(nomes)
console.log({ comps, trocas, pass }) */