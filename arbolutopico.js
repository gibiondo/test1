function arbol (x){
    var resultado = 1;
    for(i=1; i<=x; i++){
if (i%2===0){
    resultado ++;
}
else {
    resultado = resultado*2
}
    }
    return resultado;
}
console.log (arbol (7))