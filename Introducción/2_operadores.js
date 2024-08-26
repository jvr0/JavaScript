// OPERADORES MATEMÁTICOS

var edadAna, edadMaria, diferenciaEdad
var sumaEdades, yearAna, yearMaria
var yearActual

edadAna = 34
edadMaria = 28
yearActual = 2019

diferenciaEdad = edadAna - edadMaria
sumaEdades = edadAna + edadMaria

yearAna = yearActual - edadAna
yearMaria = yearActual - edadMaria

// OPERADORES LÓGICOS

var mayorAna = edadAna > edadMaria
console.log(mayorAna)

var mayorAna = !(edadAna == edadMaria)
console.log(mayorAna)

// OPERADORES UNARIOS

edadAna++ // suma uno
console.log(edadAna)

edadMaria-- // resta uno
console.log(edadMaria)

// OPERADORES DE ASIGNACIÓN

var a = 11
var b = 5

var c = a % 5 //Residuo o resto de una división
console.log(c)

a += b
console.log(a)