let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Map: gera um novo vetor, aplicando uma função
// a cada um dos elementos do vetor original

let dobro = nums.map(n => n * 2)
let metade = nums.map(x => x / 2)

//console.log(dobro)
//console.log(metade)

// Filter: filtra o vetor original, gerando um novo
// vetor apenas com os elementos que passarem no
// teste booleano da função parâmetro

let pares = nums.filter(n => n % 2 == 0)
let impares = nums.filter(n => n % 2 != 0)

//console.log(pares)
//console.log(impares)

// Reduce: aplica uma função que irá reduzir o vetor
// a um único valor

let soma = nums.reduce((soma, n) => soma + n)
let media = soma / nums.length

let soma2 = 0
for(let i = 0; i < nums.length; i++) {
   soma2 += nums[i]
}

// Pode-se passar um valor inicial para o acumulador do
// reduce() APÓS a função de redução
let somaValIni = nums.reduce((soma, n) => soma + n, 10)
console.log(somaValIni)
process.exit(0)

//console.log(soma)
//console.log(soma2)
//console.log(media)

let nums2 = [5, 3, 8, 4, 1, 6, 2, 3, 8]

let produto = nums2.reduce((prod, x, i) =>{
   console.log('* Processando elemento no índice ' + i)
   console.log(`** Operação atual: ${prod} * ${x}`)
   let p = prod * x
   console.log(`*** Valor de prod agora: ${p}`)
   return p
})

console.log(produto)

