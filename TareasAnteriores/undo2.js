class UndoManager{
    constructor(){
        this.acciones = [];
    }

addAction(accion){ //es el metodo que se encarga de agregar una accion a la lista de acciones
    this.acciones.push(accion);
}

undo() { // es el metodo que se encarga de deshacer la ultima accion
    if (this.acciones.length > 0) { 
        return this.acciones.pop();
    } else {
        console.error("No hay acciones para deshacer");
        return null;
    }
}

    getHistory(){   // es el metodo que se encarga de mostrar el historial de acciones
        return this.acciones;
    }
}

const manager = new UndoManager();

manager.addAction("Escribir 'Hola'");
manager.addAction("Escribir 'Mundo'");
console.log(manager.getHistory()); // ["Escribir 'Hola'", "Escribir 'Mundo'"]

manager.undo();
console.log(manager.getHistory()); // ["Escribir 'Hola'"]
