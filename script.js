

function par() {
    const numero = document.getElementById('number').value;

    if (numero % 2 === 0) {
        alert(`${numero} es par`);
    } else {
        alert(`${numero} es impar`);
    }
}
function pos() {
    const numero = document.getElementById('number').value;

    if (numero > 0) {
        alert(`${numero} es positivo`);
    } else if (numero < 0) {
        alert(`${numero} es negativo`);
    } else {
        alert(`El número es cero`);
    }
}
function m5() {
    const numero = document.getElementById('number').value;

    if (numero % 5 === 0) {
        alert(`${numero} es múltiplo de 5`);
    } else {
        alert(`${numero} no es múltiplo de 5`);
    }
}
function d34() {
    const numero = document.getElementById('number').value;

    if (numero % 3 === 0 && numero % 4 === 0) {
        alert(`${numero} es divisible entre 3 y 4 `);
    } else {
        alert(`${numero} no es divisible entre 3 y 4 `);
    }
}
// Ejemplo de uso:
