/**
 * La lista vinculada almacena la colección de datos, pero 
 * a diferencia de las matrices, los datos no se almacenan 
 * en la memoria contagiosa, sino que cada elemento de la 
 * lista vinculada consiste en un nodo que almacena los 
 * datos y una referencia (puntero o enlace) al siguiente 
 * elemento.
 * 
 * cana nodo teiene referencia al nodo siguiente 
 * 
 * head --> |item | next |--> |item | next |--> | Null| tail
 * 
 * head: Representa los elementos desde el principio de la lista.
tail: Representa los elementos del final de la lista.


 */
/**
 * Funciones 
 *  
append(element) ---> :Agrega un nuevo elemento a la lista.

removeAt(position):--> Quita un elemento de la posición dada en la lista y lo devuelve.

insert(position, element): ---> Agrega un elemento en la posición dada en la lista.

toString(): ---> Une todos los elementos de la lista y la devuelve como una cadena.

toArray(): --->  Convierte la lista vinculada a la matriz y la devuelve.

indexOf(element): --->  Devuelve la posición del elemento dado en la lista.

delete(element): ---> Elimina el elemento dado de la lista.

deleteHead(): ---> Quita el primer elemento de la lista.

deleteTail(): ---> Quita el último elemento de la lista.

isPresent(element): --->  Devuelve si el elemento está presente en la lista, de lo contrario.truefalse

isEmpty(): --->  Devuelve si la lista está vacía, de lo contrario.truefalse

size(): Devuelve el tamaño de la lista.

getHead(): --->  Devuelve toda la lista.
 */

class ListNodo{
    constructor(value, next = null){
        this.value = value; //cvalor guardado
        this.next = next; //puntero al siguiente valor
    }

}

class LinkedList{
    constructor(){
        this.head = null;//la cabezera de la lsta
        this.length = 0; //tamaño de la lista
    }
    //primero comprobamos si head esta vacio y liego le asignamos el nodo al actual, de lo contrario agregaremos el nodo como referencia del siguente elemento al nodo anterior
    
    //añador nuebo item a la lista enlazada
     append(value){
        let nodo =new ListNodo(value);
        let current;
        //comprobamos si la lista esta vacia 
        //  entonces agregamos un elemento al comienzo
        if(this.head === null){
            this.head = nodo; //agregamos elemento al princio
        }else{
            //de lo contrario agregaremos el nuevo nodo 
            // como el siguiente elemento
            current = this.head;
            while(current.next){

                current = current.next;
            }
            current.next = nodo;
        }
        //incrementa el tamaño
        this.length++; 
     }
     //elimona elemento de la posicion dada en la lista 
     /**   
      * si el elemento esta al principo de la lista 
      *     simplemente actualizado el encabezado para apuntar al siguente elemento de la lista
      *     
      * de lo contrario trendremos que iterrea en la lista y hacer que el nodo anterior del elementoe en la posicion dada apunte al siguiente nodo del elemento
      */
     //Reomover iten de la posicion
     removeAt(posicion){
        if(posicion > -1 && posicion < this.length){
            let current = this.head,
            previus,index = 0;
            //si elimina el primer lemento entonces simplemente aputar ala siguiente elemento
            if(posicion == 0){
                this.head = current.next;
            }else{
                // si no, encontramos la posicion correnta y luego elimina el elemento
                while(index++ < posicion){
                    previus = current;
                    current = current.next;
                }
                previus.next = current.next
            }
            this.length--;
            return current.value;
        }else{
            return null;
        }
     }

        /**
         * Insertar elemento en la posición dada en la lista vinculada
Agregar el elemento al principio
Si estamos agregando el elemento al principio, es decir, en la cabeza, simplemente asigne la lista existente al nuevo nodo.
         */

        /**
         * Agregar el elemento en el medio
Si estamos agregando el elemento en el medio de la lista, entonces tendremos que iterar hasta la posición dada y luego hacer que el nodo actual apunte al nuevo nodo y el nuevo nodo apunte al siguiente nodo.
         */
/**
 * Agregar el elemento al final de la lista
Si estamos agregando el elemento al final de la lista, es decir, en la cola, entonces tendremos que iterar hasta el último elemento de la lista y luego hacer que apunte al nuevo nodo.
 */
    //añandir item in x posicion
    insert(pos,value){
        if(pos >= 0 && pos <= this.length){
                let nodo = new ListNodo(value);
                current = this.head;
                previus,index = 0;
                    if(pos == 0){
                        nodo.next = current;
                        this.head = nodo
                    }else{
                        while(index++ < pos){
                            previus = current;
                            current = current.next;
                        }
                        nodo.next = current;
                        previus.next = nodo;
                    }
                    this.length++;
                    return true;

        }else{
            return false
        }
    }
    
    //devuelve el indice del elemento en la lista
    //si el elemento no existe delvolveremos -1
    indexOf(value){
        let current = head;
        index = -1;
        //si encontramos el elemento retornamos la posicion
        while(current){
            if(value == current.value){
                return ++index;
            }
            index++;
            current = current.next;
        }
        //si no encontramos el elemento
        return -1;
    };
    //conprueba si el elemento esta presente en ela lista
    isPresent(value){
        return this.indexOf(value) != -1;
    };
    //eliminar elemento de la lista 
    delete(value){
        return this.removeAt(this.indexOf(value));
    }
    //eliminar primer elemento de la lista
    //elemento de la cabez o head
    deleteHead(){
        let current = this.head;
        if(current == null){
            return true;
        }
        if(current.next){
            current = current.next;
            this.head = current;
        }else{
            this.head = null;
        }
        return true;
    }
    //eliminar ultimo elemento
    delerTail(){
        let current = this.head;
        if(current == null){
            return true;
        }
        while(current.next){
            if(!current.next.next){
                current.next = null;
            }else{
                current = current.next;
            }
        }
        return true;
    }
    //devuelve la lista como una cadena
    toStrinf(){
        let current = this.head; 
        let resul = '';
        while(current){
            resul += current.value + (current.next ? '\n' : '');
            current = current.next;
        }
        return resul;
    }
    //devuelve la lista como una matriz
    toArray(){
        let arr =[];
        let current  = this.head;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    
    }
    //comprueba si la lista esta vacia
    isEmpty(){
        return this.length === 0;
    };
    //obtener el tamaño de la lista 
    size(){
        return this.length;
    };
    //conseguir el primer elemento
    getHead(){
        return this.head;
    };

}

let ll = new LinkedList();

ll.append('prashant');
ll.append('anil');
ll.append('29');
console.log(ll)
console.log(ll.toArray());

//Remove 'anil' from the list
ll.removeAt(1);
console.log(ll.toArray()); 

//Remove the first element from the list
ll.deleteHead();
console.log(ll.toArray());
/**
 * ["prashant", "anil", "29"]
["prashant", "29"]
["29"]
 */