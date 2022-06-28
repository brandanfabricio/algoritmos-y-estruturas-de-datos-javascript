function Stack(){
    var items =  [];
    //creamos el array donde guardaremos lis elementos

    //agregamos elementos a la pils
    this.push = function(elementos){
        //usamos la funcion push de los array para 
        //guardar elementos en la pila
            items.push(elementos)

    }

    //sacar elementos del array
    this.pop = function(){
        return items.pop();
    }
    //mirar el elemento aen la parte superrior de la pila
    this.peek = function(){
        return items[items.length -1];
    }
    //comprobar si la pila esta vacia
    this.isEmpty = function(){
        return items.length === 0;
    }
    //vaciar la pila 
    this.clear = function(){
        items.length = 0;
    }
    this.size = function(){
        return items.length;
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

