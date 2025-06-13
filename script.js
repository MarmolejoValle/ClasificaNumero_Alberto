function analizarNumero(numero) {
    if (numero % 2 === 0) {
      console.log(`${numero} es par.`);
    } else {
      console.log(`${numero} es impar.`);
    }
  
    if (numero > 0) {
      console.log(`${numero} es positivo.`);
    } else if (numero < 0) {
      console.log(`${numero} es negativo.`);
    } else {
      console.log(`El número es cero.`);
    }
  
    if (numero % 5 === 0) {
      console.log(`${numero} es múltiplo de 5.`);
    } else {
      console.log(`${numero} no es múltiplo de 5.`);
    }
  
    if (numero % 3 === 0 && numero % 4 === 0) {
      console.log(`${numero} es divisible entre 3 y 4 al mismo tiempo.`);
    } else {
      console.log(`${numero} no es divisible entre 3 y 4 al mismo tiempo.`);
    }
  }
  
  // Ejemplo de uso:
  analizarNumero(12);
  