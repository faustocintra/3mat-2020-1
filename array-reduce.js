let nums = [12, 4, -3, 9, 8, -1, 3, 5]

// Calcula a soma do vetor
console.log(nums.reduce((acum, n) => acum += n))

// Calcula o produto do vetor
console.log(nums.reduce((acum, n) => acum *= n))

let caracts = ['-', '*', '-', '*', '-']

// Concatena os elementos de caracts
console.log(caracts.reduce((acum, n) => acum += n))