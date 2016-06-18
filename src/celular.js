'use strict';

/*
Letras  ->  Número 
ABC    ->  2 
DEF    ->  3 
GHI    ->  4 
JKL    ->  5 
MNO    ->  6 
PQRS    ->  7 
TUV    ->  8 
WXYZ   ->  9 
*/

const convertToNumero = function (letra) {
    if ('ABC'.indexOf(letra) != -1) {
       return 2;
    }
    
    if ('DEF'.indexOf(letra) != -1) {
       return 3;
    }
    
    if ('GHI'.indexOf(letra) != -1) {
       return 4;
    }
    
    if ('JKL'.indexOf(letra) != -1) {
       return 5;
    }

    if ('MNO'.indexOf(letra) != -1) {
        return 6;
    }
    
    if ('PQRS'.indexOf(letra) != -1) {
        return 7;
    }
    
    if ('TUV'.indexOf(letra) != -1) {
        return 8;
    }
    
    if ('WXYZ'.indexOf(letra) != -1) {
        return 9;
    }
    
    if ('01'.indexOf(letra) != -1) {
        return letra;
    }
    
    return '-';
};

module.exports = function celular (mensagem){
    var resultado = '';
    
    mensagem.split('').forEach(function(element, index){
      resultado += convertToNumero(element);
    });
    
    return resultado;
}