class Pila {
    constructor() {
        this.items = [];
    }
    estaVacia() {
        return this.items.length === 0;
    }
    apilar(elemento) {
        this.items.push(elemento);
    }
    desapilar() {
        if (this.estaVacia()) {
            throw new Error("La pila está vacía");
        }
        return this.items.pop();
    }
    verTope() {
        if (this.estaVacia()) {
            throw new Error("La pila está vacía");
        }
        return this.items[this.items.length - 1];
    }
}

// Función para evaluar una expresión en notación postfija
function evaluarPostfija(expresion) {
    const pila = new Pila();

    // Dividir la expresión en tokens (números y operadores)
    const tokens = expresion.split(" ");

    // Recorrer cada token de la expresión
    for (const token of tokens) {
        // Si el token es un número, apilarlo en la pila
        if (!isNaN(token)) {
            pila.apilar(Number(token));
        } else {
            // Si el token es un operador, desapilar los dos últimos números de la pila
            const operando2 = pila.desapilar();
            const operando1 = pila.desapilar();

            // Realizar la operación correspondiente
            let resultado;
            switch (token) {
                case "+":
                    resultado = operando1 + operando2;
                    break;
                case "-":
                    resultado = operando1 - operando2;
                    break;
                case "*":
                    resultado = operando1 * operando2;
                    break;
                case "/":
                    resultado = operando1 / operando2;
                    break;
                default:
                    throw new Error(`Operador no válido: ${token}`);
            }

            // Apilar el resultado de la operación en la pila
            pila.apilar(resultado);
        }
    }

    // Al final el resultado final estará en la parte superior de la pila
    return pila.desapilar();
}

// Ejemplos de uso
console.log(evaluarPostfija("3 4 + 5 *")); 