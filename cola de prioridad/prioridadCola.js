class QElemento{
    constructor(elemento,prioridad){
        this.elemento = elemento;
        this.prioridad = prioridad;
    }
}

class PrioridadCola{
    constructor(){
        this.item = []
    }
    //encolar --> agregar elemento
// recibo dos parametros, el valor y la prioridad en la cola

/**    En este método, creamos un elemento de propiedad nuevo eemento have y prioridad. Luego iteramos sobre la cola para encontrar la ubicación correcta del qElement de acuerdo con su prioridad y agregarlo.  */
    encolar(elemento,prioridad){
        //crea objeto de los elemento
            let NuevoElemento = new QElemento(elemento,prioridad);
            //ver si contiene elemento 
            let contener = false;
         
    // iterando a través de todo
     // matriz de elementos para agregar el elemento en el
     // ubicación correcta de la cola
        for(let i = 0 ; i < this.item.length; i++){
                if(this.item[i].prioridad > NuevoElemento.prioridad){
                        // Una vez que se encuentra la ubicación correcta, se encola
                        this.item.splice(i,0,NuevoElemento);
                        contener = true;
                        break;
                }
        }
        // si el elemento tiene la mayor prioridad
     // se agrega al final de la cola
     if(!contener){
        this.item.push(NuevoElemento);
     }

    }
    //desencolar  --> eliminta elementos
    /**
     * Esta función elimina un elemento de la parte delantera de una cola, ya que el elemento de mayor prioridad se almacena en la parte delantera de la cola de prioridad. Hemos utilizado el método shift de una matriz para eliminar un elemento de la cola.
     */

    desencolar(){
        // devuelve el elemento fuera de la cola
     // y eliminarlo.
     // si la cola esta vacia
     // devuelve subdesbordamiento
     if(this.isEmpaty()){
        return 'No hay elementos en la cola'
     }
     /**
      * Elimina el primer elemento de una matriz y lo devuelve. Si la matriz está vacía, se devuelve undefined y la matriz no se modifica.
      */
        return this.item.shift()
    }


    //front --> devuelve el primer elemento
    front(){
        // devuelve el elemento de mayor prioridad
     // en la cola de prioridad sin eliminarlo.
     if(this.isEmpaty()){
        return 'No hay elementos en la cola'
     }
     return this.item[0]
    }
    // rear  devuelve el último elemento de la cola de prioridad
    rear(){
        //retorna el ultimo elemento de la cola 
        if(this.isEmpaty()){
            return 'No hay elementos en la cola'
         }  
         return this.item[this.item.length -1];

    }   
    //isEmpart ---> Devuelve true si la cola de prioridad está vacía

    isEmpaty(){
        //conpara el tamaño de la cosa si es igual a 0 
        // significa que no hay elemento 
        //returna un true
        return this.item.length === 0;
    }
    //printPrioridaCola --> Imprime el elemento de la cola 
    //según la prioridad que comienza de mayor a menor
    printPrioridaCola(){
        let str = '';
        for(let i = 0; i < this.item.length; i++){
            str += this.item[i].elemento + " ";
        }
        return str;
    }

}

let cola = new PrioridadCola();

//retorna true
console.log(cola.isEmpaty());

//retorna no hya elemento 
console.log(cola.front());

//añadir elementos
cola.encolar("Sumit", 2);
cola.encolar("Gourav", 1);
cola.encolar("Piyush", 1);
cola.encolar("Sunny", 2);
cola.encolar("Sheru", 3);

//pinta todo los elementos
console.log(cola.printPrioridaCola());

//primer  elemento
console.log(cola.front().elemento);
//ultimo elemento
console.log(cola.rear().elemento);

//elimina de laca
console.log( "Ultimo elemento ", cola.desencolar().elemento);
 
// agrega nuevo eleento
cola.encolar("Sunil", 2);
 
//pintamos todo de nuevo
console.log(cola.printPrioridaCola());