// SENTENCIA SWITCH

var mes = 8

switch(mes){
    case 1: console.log('Enero'); break;
    case 2: console.log('Febrero'); break;
    case 3: console.log('Marzo'); break;
    case 4: console.log('Abril'); break;
    case 5: console.log('Mayo'); break;
    case 6: console.log('Junio'); break;
    case 7: console.log('Julio'); break;
    case 8: console.log('Agosto'); break;

    default: console.log('Mes no encontrado')
}

console.log('---')

// SENTENCIA FOR

for(var i = 1; i<=10; i++){
    console.log(i)
}

console.log('---')

for(var i = 1; i<=10; i+=2){
    console.log(i)
}

console.log('---')

for(mes=1; mes<=9; mes ++){

    switch(mes){
        case 1: console.log('Enero'); break;
        case 2: console.log('Febrero'); break;
        case 3: console.log('Marzo'); break;
        case 4: console.log('Abril'); break;
        case 5: console.log('Mayo'); break;
        case 6: console.log('Junio'); break;
        case 7: console.log('Julio'); break;
        case 8: console.log('Agosto'); break;
    
        default: console.log('Mes no encontrado')
    }

}

console.log('---')

// SENTENCIA WHILE Y DO...WHILE

var i = 1
while(i <= 10){

    console.log(i)
    i++


}

console.log('---')

var i = 11

do{
    console.log(i);
    i++;

}while(i <= 10);