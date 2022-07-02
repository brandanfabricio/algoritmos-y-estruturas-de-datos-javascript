/**
 * 
# Listas
  La estructura de datos de lista es un ADT con una 
  colección de datos en la que no es necesario buscar, 
  agregar o eliminar elementos en ningún orden ordenado.
  

Al igual que una lista de tareas pendientes, una lista de 
comestibles, una lista de los diez mejores, etc.

Una lista es una secuencia ordenada de datos. Cada dato 
almacenado en la lista se denomina elemento y el elemento
 puede ser de cualquier tipo de datos.

Los elementos se pueden agregar al principio de la lista o
después de cualquier elemento existente en la lista, podemos
 eliminar los elementos de la lista. También podemos borrar 
 toda la lista y restablecerla.

También puede verificar el tamaño de la lista, Una lista sin 
elementos será una lista vacía.


Los elementos de la lista se pueden mostrar juntos o podemos 
mostrar el elemento único en la posición actual.


Podemos movernos en diferentes posiciones de la lista, al 
frente, al último, al siguiente, al anterior o a cualquier
 posición dada. También podemos verificar la posición actual
  en la lista y usarla para imprimir el elemento en esa 
  posición.

Crearemos una lista que admitirá las cadenas, números, 
booleanos, nulos, objetos y matrices.


## size (método):Devuelve el tamaño de la lista.
## clear (método): borra la lista.
## print (método): imprime todos los elementos de la lista.
## getElement (método): devuelve el elemento en la posición actual de la lista.
## insertar (método): inserta un nuevo elemento después del elemento dado en la lista.
## anexar (método): agrega un nuevo elemento en la parte superior de la lista.
## remove (método): elimina el elemento dado de la lista.
## front (método): mueve la posición al primer elemento de la lista.
## retaguardia (método): mueve la posición al último elemento de la lista.
## prev (método): mueve la posición al elemento anterior de la lista.
## next (método): mueve la posición al siguiente elemento de la lista.
## currPos (método):Devuelve la posición actual de la lista.
## moveTo (método): se mueve a la posición específica de la lista.
## contains (method): Compruebe si el elemento está presente en la lista.
 
 */

class List{
        constructor(){
            this.listaSize = 0; //tamaño de la lista
            this.pos = 0; // rastrear la posición actual en la lista
            this.items = []; //donde guardar datos

        }

    //añadir item a la lista 
    append(elemento){
        this.items[this.listaSize++] = elemento;
    }
    //buscar elemento en la lista 
    //encontrar elemento en la lista 
    find(elemento){
        for(let i = 0; i <this.listaSize;i++){
            if(this.items[i] == elemento){
                return i;
            }
        }

        return -1;
    }
    //aliminar item de la lista 
    remove(elemento){
        let index = this.find(elemento);
        if(this.items > -1){
            this.items.splice(index,1);
            --this.listaSize;
            return true
        }
        return false;
    
    }
    //insertar elemento despues del elemento dado a la lista
    insert(elemento,after){
        let isertPos = this.find(after);
        if(isertPos > -1){
            this.items.splice(isertPos+1,elemento);
            ++this.listaSize;
            return true;
        }
        return false;
    }
    //comprobar si ele elemento est apresente en la lista 
    contains(elemento){
        let index = this.find(elemento);
        return index > -1 ? true : false;
    }
    //desplazasr al primer elemento de la lista
    front(){
        this.pos = 0;
    }
    //desplazarse al utlrimo de la lista 
    rear(){
        this.pos = this.listaSize - 1;
    }
    //desplazarse al elemento anterior de la lista
    prev(){
        if(this.pos > 0){
            --this.pos;
        }
    }
    //pasar al siguiente elemento de la lista
    next(){
        if(this.pos < this.listaSize - 1 ){
            ++this.pos;
        }
    }
    //desplazarse al elemento especiafico de la lista
    moveTO(pos){
        if(pos > 0 && pos <= this.listaSize){
            this.pos == pos - 1;
        }
    }
    //obtener la posicion actual en la lista
    currPos(){
        return this.pos;
    }
    //obtemer el tamaño de la lista 
    size(){
        return this.listaSize;
    }
    //imprimir todos los elmento de la lista
    print(){
        return this.items.join(',')
    }
    clear(){
        this.listaSize = 0;
        this.pos = 0;
        this.items = [];
    }
}



//Input:
let list = new List();
list.append('Prashant');
list.append('Taha');
list.append('Anil');

list.insert('Yogesh', 'Taha');
console.log(list.print()); //print all the items of the string.
console.log(list.getElement());

list.next();  //move to next item
console.log(list.getElement());

list.rear(); //move to last item
console.log(list.getElement());

list.prev(); //move to prev item
console.log(list.getElement());

console.log(list.size());  //get the size of the list

list.remove('Taha');
console.log(list.size());  //get the size of the list
console.log(list.print()); //print all the items of the string.

//Output:
//"Prashant,Taha,Yogesh,Anil"
//"Prashant"
//"Taha"
//"Anil"
//"Yogesh"
//4
//3
//"Prashant,Yogesh,Anil"