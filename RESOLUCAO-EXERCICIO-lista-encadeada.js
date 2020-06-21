const LinkedList = require('./lib/LinkedList')

/***********************************************
 * 
 * 1) Altere a classe LinkedList, acrescentando os métodos:
 *    - isEmpty(): retorna true se a lista estiver vazia e 
 *       false caso contrário
 *    - size(): retorna o tamanho (número de nodos) da lista
 */

// As alterações do nº 1) foram efetuadas no arquivo da classe LinkedList.

 /* 2) Crie uma instância da lista encadeada e coloque nela 
 *    alguns nomes de pessoas. Faça as inserções de modo que
 *    os nomes fiquem em ordem alfabética:
 *    - JUREMA
 *    - ASDRÚBAL
 *    - EPAMINONDAS
 *    - SEVERINO
 *    - BELARMINO
 *    - MARUSKA
 *    - WALDISNEY
 *    - ORESTES
 */
 
 let lista = new LinkedList()

 // Como a lista está vazia, podemos colocar JUREMA no fim, com push()
 lista.push('JUREMA')
 console.log(lista.toString())

 // ASDRÚBAL vem antes de JUREMA; portanto, precisa entrar na posição 0
 lista.insert('ASDRÚBAL', 0)
 console.log(lista.toString())

 // EPAMINONDAS vem após ASDRÚBAL e antes de JUREMA; portanto, posição 1
 lista.insert('EPAMINONDAS', 1)
 console.log(lista.toString())

 // SEVERINO vem após todos os anteriores; push() resolve
 lista.push('SEVERINO')
 console.log(lista.toString())

 // BELARMINO vem depois de ASDRÚBAL e antes de EPAMINONDAS: posição 1
 lista.insert('BELARMINO', 1)
 console.log(lista.toString())

 // MARUSKA vem após JUREMA e antes de SEVERINO: posição 4
 lista.insert('MARUSKA', 4)
 console.log(lista.toString())

 // WALDISNEY vem após todos os demais: push()
 lista.push('WALDISNEY')
 console.log(lista.toString())

 // Por fim, ORESTES vem após MARUSKA e antes de SEVERINO: posição 5
 lista.insert('ORESTES', 5)
 console.log(lista.toString())
