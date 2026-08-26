console.log('Olá Javascript!')

var userName = 'Márcio Sá'

document.getElementById('user-name').innerHTML = userName


// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

//Operadores maetmaticos
// + Soma
// - Subtrtacao
// / Divisao
// * Multiplicacao

var n1 = 5
var n2 = 5

var total = n1 + n2
console.log(total)

//Opeoradores de comparacao
// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
// 1=='1' //true

// Nao igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true

var v1 = 5
var v2 = 5

var resultado = v1 == v2
console.log (resultado)