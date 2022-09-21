function sumatoriaBajoImporte (numero){


let resultado = 0;
for (i=0; i<=numero.length; i++){
    let mes = numero [i];
    if (mes > 0 && mes >=1000){
        resultado += mes;
    }

    

}
return resultado;

}
console.log (sumatoriaBajoImporte([300,400,-1,1010]))


//Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos
//devuelva el resultado final de la suma de los importes de todos los meses que
//tienen ganancia, a excepción de los que superen un importe de $ 1.000