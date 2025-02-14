function esBalanceada(expresion){
let pila = [];
let pares = {
    ")": "(",
    "]": "[",
    "}": "{",
    "'": "'",  
    '"': '"', 
    ">": "<"   
};

for (let caracter of expresion){
if (["(", "[", "{", "'", '"', "<"].includes(caracter)){
    pila.push(caracter);
    }
    else if ([")", "]", "}", "'", '"', ">"].includes(caracter)){
        if (pila.length === 0|| pila.pop() !== pares[caracter]){
            return false;
        }
    }
}
return pila.length === 0;
}
console.log(esBalanceada("{[()]}"));         
console.log(esBalanceada("{[(])}"));         
console.log(esBalanceada("((()))"));        
console.log(esBalanceada("'Hola'"));          
console.log(esBalanceada('"Hola"'));          
console.log(esBalanceada("<html></html>"));   
console.log(esBalanceada("'Hola\""));        