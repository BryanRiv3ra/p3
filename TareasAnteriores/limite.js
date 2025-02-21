class PilaLimitada {
    constructor(tamanoMaximo) {
        this.items = [];
        this.tamanoMaximo = tamanoMaximo; 
    }

    push(elemento) {
        if (this.items.length < this.tamanoMaximo) {
            this.items.push(elemento); 
        } else {
            console.error("Error: La pila está llena");
        }
    }

    pop() {
        if (this.items.length > 0) {
            return this.items.pop(); // Elimina y devuelve el último elemento si la pila no está vacía
        } else {
            console.error("Error: La pila está vacía"); 
            return null;
        }
    }

    peek() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1]; // devuelve el último elemento sin eliminarlo
        } else {
            console.error("Error: La pila está vacía"); 
            return null;
        }
    }

    estaVacia() {
        return this.items.length === 0; // muestra true si la pila está vacía
    }

    estaLlena() {
        return this.items.length === this.tamanoMaximo; // muestra true si la pila está llena
    }

    tamano() {
        return this.items.length; // muestra el número de elementos en la pila
    }
}

let miPila = new PilaLimitada(3);

miPila.push("A"); 
miPila.push("B"); 
miPila.push("C"); 
miPila.push("D");
console.log(miPila.peek()); // "C"
console.log(miPila.pop());
console.log(miPila.estaVacia()); // false
console.log(miPila.estaLlena()); // false
console.log(miPila.tamano()); // 2