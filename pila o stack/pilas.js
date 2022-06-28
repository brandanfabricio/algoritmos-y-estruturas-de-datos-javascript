class PilaItem{
    constructor(dato,next){
        this.dato = dato;
        this.next = next;
    }



}


class Pila {
    constructor(){
        this.start = null;
    }


    push(dato){
        const nuevoItem = new PilaItem(dato,this.start);
        this.start = nuevoItem;
    }
    pop(){
        if(this.start){
            if(this.start.next){
                const segundoNodo = this.start.next;
                this.start = segundoNodo;
            }else{
                this.start = null;
            }

        }
    }

    print(){
        let nodoActual = this.start;
        while(nodoActual){
            console.log(nodoActual.dato);
            nodoActual = nodoActual.next
        }
    }


}

const pila = new Pila();

pila.push(1)
pila.push(2)
pila.push(3)
pila.push(4)
pila.push(5)
pila.print();

console.log(pila)




