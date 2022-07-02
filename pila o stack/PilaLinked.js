/**
 * Una pila es una colección ordenada de datos en la que los datos se insertan en orden LIFO (Last In First Out). Veremos cómo implementarlo utilizando una lista enlazada única basada en objetos en javascript.
 */
/**
 * Lista de operaciones realizadas en la pila
Push: Agrega el elemento en la pila en la parte superior.
Pop: quita el elemento superior de la pila y lo devuelve.
Peek: Muestra el elemento superior de la pila.
toArray: Convierta la pila en la matriz.
size: Devuelve el tamaño de la pila.
isEmpty: Devuelve si la pila está vacía, de lo contrario.truefalse
clear: borra la pila.
 */
class NodoPila{
    constructor(value,next = null){
        this.value = value; //valores de la pila
        this.next = next; //puntero a otro nodo
    }
}

class LinkePila{
    constructor(){
        this.length = 0; //tener referencial del tamaño de la pila
        this.head= null; //cabeza de la pila o primer elemento de la pila

    }
    /**
     * Al igual que las pilas, se añaden los elementos en la parte superior del nodo 
     * si esta vacio entonves el nuevo nodo sera head, 
     */
     push(value){
        let nodo = new NodoPila(value);
        let current;
   
         current = this.head;
         nodo.next = current;
         this.head = nodo;
         this.length++;

     }
     /**
      * sacar elemento de la pila
      * para eliminar elemento de la pila, simplemente hacemos que head apunte el siguente elemento 
      */
     pop(){
        let  current = this.head;
        //si hay elemento, eliminelo y hacemos el siguente elemento como el primero
        if(current){
            let datos = current.value;
            current = current.next;
            this.head = current;
            this.length--;
            return datos;
        }
        return null;


     }
     /**
      * Conversion de pila en matriz
      * para comvertir la pila en una matriz, podemos copiar todo los elemento a la matriz y devolverla 
      * 
      */
     toArray(){
        let arr =[];
        let current = this.head;
        while(current){
             arr.push(current.value);
             current = current.next;
        }
        return arr;
     }
     //convertir todo los elemento en un sstring
     toString(){
        let current = this.head;
        let result = '';
        if(current){
            while(current){
                result += current.value + "--->";
                current = current.next;
            }
            return "X-->" + result + "X";
        }else{
            return "X" + '----->' + "X";
        }
 

     }

      // vaciar la pila
      clear(){
        this.head = null;
        this.length = 0;
      }

    //mostrar la parte superior de la pila
    peek(){
        if(this.head){

            return this.head;
        }
        return null;
    }


    //comprueba la pila si esta vacia o no; si esta vacia devuelve true
    isEmpty(){
        return this.length === 0;
    }
    //devuelve el tamaño de la pila
    size(){
        return this.length;
    }
}


//Input:
 let stack = new LinkePila();   //creating new instance of Stack

 stack.push(1);
   stack.push(2);
   stack.push(5);
   stack.push(7);
   stack.push(3);
   stack.push(5);
   console.log(stack.toString())
    
   console.log(stack.peek());


  console.log(stack.isEmpty());
 console.log("tamaño actual",stack.size());
 console.log(stack.pop());
 console.log("tamaño luego", stack.size());
 console.log(stack.peek());
 
 console.log(stack.toArray());
//  stack.clear();  //clear the stack
 console.log(stack.isEmpty());
 console.log(stack.toString())
 stack.clear();

 console.log(stack.toString())
 console.log(stack.peek());


 /*Output:
 3
 false
 3
 3
 [2, 1]
 2
 true
*/
