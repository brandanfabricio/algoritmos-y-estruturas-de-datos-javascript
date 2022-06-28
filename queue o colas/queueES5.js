/**
 * una cola es como una cola de una compa 
 * donde se van agrupando segun el orfden de llegada
 * y sale en ese mismo orden 
 * osea 
 * el primero en llegar es el primero en salir
 * 
 * funciones
 *   enqueue ---> agregar elemeno a la cola
 *    dequeue ---> quita el primer elemento 
 *      frint ----> muestra el primer elemento de lacola
 *       reat ---> retorna el ultimo elemento
 *          size ---> devuelve el tamaño de la cola
 *             isEmpty ----> se fija si hay o no elemento en la cola    
 * 
 * 
 * 
 */


function Queue(){
    let items = []; //donde guardo los valores
    let front = 0;  //posisicon delantera
    let rear = -1; //posicion final
    let count = 0;  //contador de cantidad 


    //añadir elementos a la cola 

    this.enqueue= (elemento)=>{
        //agregamos elementos a la posisicon finañ
        items[++rear] = elemento;
        count++
    }

    //quitar primer elemento de lacola 
    this.dequeue= ()=>{
            let current = front++;
            let temp = items[current];
            items[current] = null;
            count--;
            return temp;
    } 

    //devuelve primer element ode lacola 
    this.front = ()=>{
        return items[front]
    }
    
    //devuele el ultimo elemento de la cola
    this.rear = ()=>{
        return items[rear];
    }
    // chequear cola a ver si esta vacia 
    this.isEmpty=()=>{
        return count === 0;
    }
    // devolver el tamaño de la cola 
    this.size=()=>{
        return count;
    }
    //imprimir cola 
    this.print = ()=>{
        let temp = items.filter(e=> e !==null);
        console.log(temp.toString())
    }

}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('pranav');
queue.enqueue('sachin');
queue.enqueue('yogesh');
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
queue.enqueue('prashant');
queue.enqueue('yadav');
queue.print();
console.log(queue.size());
console.log(queue.front());
console.log(queue.rear());

