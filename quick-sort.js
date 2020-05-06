let comps, pass, trocas

function troca(vet, i, j) {
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
   trocas++
}

// Parâmetros opcionais:
// posIni: se não for informado, assume o valor 0
// posFim: se não for informado, assume o tamanho do vetor - 1
function quickSort(vet, posIni = 0, posFim = vet.length - 1) {
   pass++
   // Condição de saída da recursividade: o subvetor
   // a ser ordenado precisa ter mais que um elemento
   if(posFim > posIni) {
      const posPivot = posFim
      let posDiv = posIni - 1
      // Percorre o vetor do início até a penúltima posição.
      // Quando o elemento atual for menor que o elemento pivô,
      // incrementa posDiv e faz a troca dos valores que estão
      // nas posições i e posDiv entre si.
      for(let i = posIni; i < posFim; i++) {
         comps++
         // console.log({i, posDiv})
         if(vet[i] < vet[posPivot] && i != posDiv) {
            posDiv++
            troca(vet, i, posDiv)
         }
      }
      // Após terminado o percurso, é necessário colocar o
      // pivô no lugar correto. Para isso, incrementa-se o
      // posDiv uma última vez e efetua-se a troca dos valores
      // das posições posDiv e posPivot entre si.
      posDiv++
      troca(vet, posDiv, posPivot)

      // Ordena o subvetor à esquerda do pivô (que está na posDiv)
      quickSort(vet, posIni, posDiv - 1)

      // Ordena o subvetor à direita do pivô
      quickSort(vet, posDiv + 1, posFim)
   }
}

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const nomes = require('./amostras/100-mil-nomes')

comps = 0, pass = 0, trocas = 0
//quickSort(nums)

//console.log(nums)
//console.log({comps, pass, trocas})

console.time('quick-sort')
quickSort(nomes)
console.timeEnd('quick-sort')
console.log(nomes)
console.log({comps, pass, trocas})
