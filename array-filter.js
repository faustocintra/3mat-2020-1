let vetor = [-8, 15, 4, 0, -3, -7, 11, 5, 6, -1, 9]

/* Filtrando apenas os números NEGATIVOS */
let negativos = vetor.filter(n => n < 0)
console.log(negativos)

/* Filtrando apenas os números PARES */
let pares = vetor.filter(n => n % 2 == 0)
console.log(pares)

/********************************************** */

let mix = ['cavalo', 13, true, null, 'cabra', -7, 16, undefined, 0, 'vaca', [1, 2, 3], 'ovelha', 0.67]

/* Filtrando apenas as strings */
let strings = mix.filter(e => typeof e == 'string')
console.log(strings)

/* Filtrando apenas os números */
let nums = mix.filter(e => typeof e == 'number')
console.log(nums)