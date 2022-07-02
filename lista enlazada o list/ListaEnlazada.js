class NodoLista {
    constructor(dato,siguiente){
        this.dato = dato;
        this.siguiente = siguiente;
    }
}

class ListaEnlazada{

    constructor(){
        this.primero = null;
        //this.ultimo = null;
    }

    agregar(dato){
        const NuevoDato = new NodoLista(dato,this.primero);
        this.primero = NuevoDato;
    }

    magnitud(){
        let contador = 0;
        let nodo = this.primero;
        while(nodo){
            contador++;
            nodo = nodo.siguiente;
        }
        return contador;
        
    }
    vaciar(){
        this.primero = null;
    }

    obtenerUltimo(){
        let ultimoNodo = this.primero;
        if(ultimoNodo){
            while(ultimoNodo.siguiente){
                ultimoNodo = ultimoNodo.siguiente;
            }
        }
        return ultimoNodo;
    }


    obtenerPrimero(){
        return this.primero;
    }
    
    encontrar(dato){
        if(!this.primero){
            return null;
        }
        let buscarNodo = this.primero;
        while(buscarNodo){
            if(buscarNodo.dato === dato){
                return buscarNodo;

            }
            buscarNodo = buscarNodo.siguiente;
        }
    }
    print(){
        let buscar = this.primero;
        while(buscar){
            console.log(buscar.dato);
            buscar= buscar.siguiente;
        }
    }
}



let lista = new ListaEnlazada();

lista.agregar('a')
lista.agregar('v')
lista.agregar(2)
lista.agregar(4)
lista.agregar('f')


console.log('------------------------a')
console.log(lista)
console.log('------------------------')


console.log('------------------------b')
console.log(lista.obtenerPrimero());
console.log('------------------------')


console.log('------------------------c')

console.log(lista.obtenerUltimo());
console.log('------------------------')


console.log('------------------------d')
console.log(lista.magnitud());
console.log('------------------------')



console.log('------------------------e')
console.log(lista.encontrar(2));
console.log('------------------------')


console.log('------------------------f')
lista.print()
console.log('------------------------')


console.log('------------------------g')

lista.vaciar()
console.log(lista)

// console.log(lista.magnitud());

// // lista.vaciar()
// console.log(lista.obtenerUltimo());
// console.log(lista.obtenerPrimero())

// console.log(lista.encontrar(5))
