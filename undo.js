class UndoManager{
    constructor(){
        this.acciones = [];
    }

addAction(accion){
    this.acciones.push(accion);
}

undo() {
    if (this.acciones.length > 0) { 
        return this.acciones.pop();
    } else {
        console.error("No hay acciones para deshacer");
        return null;
    }
}

    getHistory(){
        return this.acciones;
    }
}

const manager = new UndoManager();

manager.addAction("Escribir 'Hola'");
manager.addAction("Escribir 'Mundo'");
console.log(manager.getHistory()); // ["Escribir 'Hola'", "Escribir 'Mundo'"]

manager.undo();
console.log(manager.getHistory()); // ["Escribir 'Hola'"]

manager.undo();
console.log(manager.getHistory()); // []

manager.undo(); // No hay acciones para deshacer