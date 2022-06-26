class ColaItem{
    constructor(dato,next){
        this.dato = dato;
        this.next = next;
    }
}


class Cola{
    constructor(){
        this.front = null;
        this.end = null;
    }

    encolar(dato){
        const nuevoItem = new ColaItem(dato,null);
        if(this.end){
            this.end.next = nuevoItem;
        }
        this.end = nuevoItem;
        if(!this.front){
            this.front = this.end;
        }
    }
    desencolar(){
        if(!this.front){
            return null;
        }
        const PrimerNodo = this.front;
        if(this.front.next){
            this.front = this.front.next;
        }else{
            this.front = null;
            this.encolar = null
        }
        return PrimerNodo;
    }
    print(){
        let actualNodo = this.front;
        let resultadoCom = '';

        while(actualNodo){
            resultadoCom += actualNodo.dato + '-->';
            actualNodo = actualNodo.next;
        }
        return resultadoCom += 'x ';
    }
    

}


const cola = new Cola();
cola.encolar("1");
cola.encolar("2");
cola.encolar("3");
cola.encolar("4");
cola.encolar("5");


// console.log(cola.desencolar())
// console.log(cola.desencolar())
// console.log(cola.desencolar())
// console.log(cola.desencolar())
// console.log(cola.desencolar())
// console.log(cola.desencolar())

// cola.print();
console.log(cola.print())
