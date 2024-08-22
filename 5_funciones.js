// FUNCIONES

function suma (a, b, c=3){
    return a+b+c
}

// FUNCIONES RECURSIVAS

var factorial = function(n){
    if((n == 0) || (n==1))
        return 1
    else 
        return(n * factorial(n-1))
}

// FUNCIONES PREDEFINIDAS
// eval isFinite isNaN parseInt parseFloat Date Number String encodeURI

var bebidas = ['cafe', 'te', 'limonada']
var nombres = ['Jose', 'Carlos', 'Martin']

console.log(nombres.length)

for(var i = 0; i <= nombres.length; i++){
    console.log(nombres[i])
}

bebidas.forEach(function(i, indice){
    console.log(i, indice)
})

nombres.push('pedro') //agregar al final
nombres.unshift('lili') //agregar al principio
nombres.pop() //quitar el último elemento
nombres.shift() //quitar el primer elemento

nombres.indexOf('Carlos') //saber el índice del elemento
nombres.splice(1,2) //eliminar el elemento dado, desde el elemento 1 elimina 2

