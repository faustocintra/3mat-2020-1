let legumes = ['batata', 'cenoura', 'abobrinha', 'mandioquinha salsa', 'inhame', 'cará', 'beterraba']

// Calcula o comprimento de cada elemento do vetor legumes
let compr = legumes.map(x => x.length)

console.log(compr)

// Cria um novo vetor com todos os elementos em maiúsculas
let maiusc = legumes.map(x => x.toUpperCase())

console.log(maiusc)

// Cria um novo vetor com todos os elementos 
// do vetor compr elevados ao quadrado
let pot2 = compr.map(i => Math.pow(i, 2))

console.log(pot2)