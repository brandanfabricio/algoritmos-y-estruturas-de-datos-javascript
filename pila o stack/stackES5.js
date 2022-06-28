/**
 * creacmos las funcion consructora 
 *  ES5
 * enfoque clasico
 */

function Stack(){
        var items = [];

        var top = 0;

//inseramos elemento a la pila 
//los elementos en la tila se insertan al principio 


        this.push = function(elemento){
        //insertamos elemento en el arreglo y usamos top 
        //para designar la posicion del elemento 
                items[top++] = elemento;
        }

        //sacar elemento del la pila 
        this.pop = function(){
                //quita y devuelve el elemento superior
                // de la pila
                //con top vermmo el contador de elementos
                return items[--top]
        }

        // mostrar el elmeneto en la parte superior 
        // de la pila 
        this.peek = function(){
                return items[top - 1]
        }        
        //comprobar si la pila esta bacia 
        this.isEmpty = function(){
                return top === 0;
        }
        //borrar todos los elementos de la pila
        this.clear = function(){
                top = 0;
        }
                //ver el tamaño de la pita 
                this.size = function(){
                        return top;
        }  
}


var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())
stack.clear()
console.log(stack.isEmpty())

