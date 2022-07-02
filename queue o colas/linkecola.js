/**
 *  una stack o cola utilizando 
 * lista enlazada
 * 
 */
/**
 * Lista de operaciones realizadas en cola
enqueue: agrega nuevos datos al final de la cola.
dequeue: elimina los datos de la parte frontal de la cola y los devuelve.
front: Devuelve los primeros datos del frente de la cola.
retaguardia: Devuelve los primeros datos del final de la cola.
toArray: Devuelve la cola como la matriz.
size: Devuelve la longitud de la cola.
isEmpty: Devuelve si la cola está vacía, de lo contrario.truefalse
clear: borra la cola.
 */


class ColaNodo{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Colalinked{

    constructor(){
        this.head = null;
        this.length = 0;
    }
    //agregar dato al final de la cola
    //encolar
    /**
     * 
     * Agregar un elemento en la cola
Para agregar un elemento en la cola, verificaremos si la 
lista está vacía y luego usaremos el nuevo nodo como primer
 elemento, de lo contrario, agregaremos el nuevo nodo al 
 final de los nodos existentes. 
     */
    encolar(value){
        let nodo = new ColaNodo(value);
        let current;
        if(this.head == null){
            
            this.head = nodo;
          
            
        }{
          
            
            
            console.log(current.next)
            console.log(nodo)
            /*
            while(current.next){

                current = current.next;
                // console.log(current)
                
            }*/
            
            //current.next = nodo;
        }
        this.length++

    }


    /**
     * Quitar un elemento de la cola
Para eliminar un elemento de la cola, solo tenemos que 
eliminar el primer nodo de la lista haciendo que la cabeza 
apunte al siguiente nodo y devuelva el nodo eliminado.
     */

    desencola(){
            let current = this.head;
            if(current){
                let dato  = current.value;
                current = current.next;
                this.head = current;
                this.length--;
                return dato;
            }
            return null;
    }



    //mostrar el primer elemento de la cola 
    front(){
        if(this.head){

            return this.head.value;
        }
        return null;

    }

    //mostrar el ultimo elementod de la cola
    rear(){
        let current = this.head;
        if(current == null){
            return null;
        }
        while(current.next){
            current = current.next;
        }
        return cola.value;
    }

    toArray(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        return arr;

    }

    //convertir en un array que muestra el recorrido
    tuString(){
        let current = this.head;
        let result ="";
        while(current){
            result += current.value + '--->';
            current = current.next;
        }
        return'X --->' + result + '---> X'
    }

    //obtemer el tamaño de la cola
    size(){
        return this.length;
    }
    //comprueba si esta vacio
    isEmpty(){
        return this.length === 0;
    }
    //corra la cola
    clear(){
        this.head = null;
        this.length=0;
    }
}


const cola = new Colalinked();

/*
console.log(cola.isEmpty())
console.log(cola.tuString())
*/
cola.encolar('pranav');

cola.encolar('sachin');
//cola.encolar('yogesh');
/*
console.log(cola.tuString())
console.log(cola.tpArray())
console.log(cola.tuString())
console.log(cola.front())
cola.desencola();
cola.desencola();

console.log(cola.tpArray())
console.log(cola.tuString())

cola.encolar('prashant');
cola.encolar('yadav');

console.log(cola.front())

console.log(cola.size())
console.log(cola.isEmpty())
console.log(cola.tpArray())
console.log(cola.tuString())

cola.clear();
console.log(cola.tpArray())
console.log(cola.tuString())*/