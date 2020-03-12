/*
   Parâmetros:
   vet: o vetor sendo processado
   posIni: a posição inicial a partir da qual vamos
      procurar o menor valor
*/
function encontrarPosMenor(vet, posIni) {
   let posMenor = posIni
   for(let i = posIni + 1; i < vet.length; i++) {
      if(vet[i] < vet[posMenor]) posMenor = i
   }
   return posMenor
}

/*
   Parâmetros:
   vet: o vetor onde será operada a troca (passagem por referência)
   i, j: as posições do vetor que serão trocadas entre si
*/
function troca(vet, i, j) {
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
}

function selectionSort(vet) {
   // Este for também só vai até o penúltimo
   for(let posIni = 0; posIni < vet.length - 1; posIni++) {
      posMenor = encontrarPosMenor(vet, posIni + 1)
      if(vet[posMenor] < vet[posIni]) troca(vet, posMenor, posIni)
   }
}

let nums = [8, 3, 2, 9, 4, 0, 6, 5, 2, 7, 1]

selectionSort(nums)

console.log(nums)