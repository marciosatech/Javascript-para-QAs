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
console.log(resultado)

function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(2, 5)

function boasVindas(nome) {
    alert(nome + ', seja bem-vindo(a)!')
}

boasVindas('Márcio')

function somaretur(n1, n2) {
    return n1 + n2
}

var resultadosomaretur = somaretur(1, 2)
console.log(resultadosomaretur)

//CAIXA//
// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais 
// Quando faço um saque de 500 reais 
// Então o valor do saque deve deduizr do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais 
// Quando faço um saque de 1001 reais 
// Então não deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo 

// Cenário 3: Saque com valor maximo
// Dado que meu saldo é de 1000 reais 
// E o valor máximo por operação é de 700 reais 
// Quando faço um saque no valor de 701 reais 
// Então não deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

var saldo = 1000

function saque(valorSaque) {

    if (valorSaque > saldo) {
        console.log("Valor do saque superior ao saldo")
    } else if (valorSaque > 700) {
        console.log('O valor máximo por operação é de R$ 700,00')
    } else {
        saldo = saldo - valorSaque
        console.log(`Saque de R$ ${valorSaque} realizado com sucesso. Saldo em conta R$ ${saldo}`)
    }
}

saque(300)

//ARRAYS//
var gaveteiro = ['Meias', 'Camisetas', 'Blusas', 5]
console.log(gaveteiro[3])

gaveteiro.push('Cuecas') //Adiciona na lista
console.log(gaveteiro)

gaveteiro.pop() //Remove o ultimo item da lista
console.log(gaveteiro)

gaveteiro = gaveteiro.filter(function (item) {
    return item !== 'Camisetas'
    console.log(gaveteiro)
})

console.log(gaveteiro)

gaveteiro = gaveteiro.filter(function (item) {
    return item == 'Blusas'
    console.log(gaveteiro)
})

console.log(gaveteiro)

//CONTROLE DE REPETIÇÃO
var frutas = ['Abacate', 'Uva', 'Morango']
frutas.forEach(function (item) {
    console.log(item)
})

for (var item in frutas) {
    console.log(item) // Pega o indice de cada posição
    console.log(frutas[item]) // Pega o valor de cada posição
}

for (var item = 0; item <= 10; item++) {
    console.log(item)
}

//OBJETOS
yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraraIdade: function () {
        console.log(`A idade do ${this.nome} é ${this.idade} anos`)
    }
}

console.log(yoda)
yoda.mostraraIdade()