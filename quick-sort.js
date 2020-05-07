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
function quickSort(vet, fnComp, posIni = 0, posFim = vet.length - 1) {
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
         
         /************************
          * 
            USO DE FUNÇÃO DE COMPARAÇÃO

            Para tornar o algoritmo de ordenação mais flexível e capaz de
            ordenar tipos de dados não comparáveis diretamente pela linguagem,
            é possivel passar uma função que será usada para comparar dois valores
            quaisquer. Essa função será chamada toda vez que for necessário comparar
            dois valores para ordenação.
         
         */

         //if(vet[i] < vet[posPivot] && i != posDiv) {
         if(fnComp(vet[posPivot], vet[i])) {
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
      quickSort(vet, fnComp, posIni, posDiv - 1)

      // Ordena o subvetor à direita do pivô
      quickSort(vet, fnComp, posDiv + 1, posFim)
   }
}

/* let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

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
 */

 let pessoas = [
   { codigo: 7, nome: 'Cláudio Cardoso', idade: 13, sexo: 'M' },
   { codigo: 1, nome: 'Maria Moreira', idade: 43, sexo: 'F' },
   { codigo: 4, nome: 'Fulgêncio Ferreira', idade: 71, sexo: 'M '},
   { codigo: 5, nome: 'Heitor Herrera', idade: 13, sexo: 'M ' },
   { codigo: 3, nome: 'Tatiana Taveira', idade: 35, sexo: 'F' },
   { codigo: 2, nome: 'Olivia Oliveira', idade: 13, sexo: 'F' } 
 ]

function comparaPorNome(a, b) {
   // Retorna true se a > b
   // Retona false caso contrario
   return a.nome > b.nome
}

function comparaPorCodigo(a, b) {
   return a.codigo > b.codigo
}

function comparaPorIdade(a, b) {
   return a.idade > b.idade
}

function comparaPorIdadeNome(a, b) {
   if(a.idade == b.idade) return a.nome > b.nome
   return a.idade > b.idade
}

function comparaPorSexo(a, b) {
   return a.sexo > b.sexo
}

function comparaPorSexoNome(a, b) {
   if(a.sexo == b.sexo) return a.nome > b.nome
   return a.sexo > b.sexo
}

function comparaPorIdadeDesc(a, b) {
   // Ordem descendente: basta trocar o sinal da comparação
   return a.idade < b.idade
}

console.log(pessoas)

quickSort(pessoas, comparaPorIdadeDesc)

console.log(pessoas)