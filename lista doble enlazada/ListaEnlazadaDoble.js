class Nodo {
    constructor(dato,seguiente,anterior){
        this.dato = dato;
        this.seguiente = seguiente;
        this.anterior = anterior;
    }
}


class DobleListaEnlazada{
    constructor(){
        this.primero= null;
        this.ultimo = null;
        this.tamaño = 0;
    }



            /**Añadir */
    AñadirAlPrincipio(dato){
            const nuevoNodo = new Nodo(dato,this.primero,null);

            if(this.primero){
                nuevoNodo.seguiente = this.primero;
                this.primero.anterior = nuevoNodo;
                this.primero = nuevoNodo;
            }else{
                this.primero = nuevoNodo;
                this.ultimo = nuevoNodo;
            };
            this.tamaño++;
    }

    añadirAlUltimo(dato){

        const nuevoNodo = new Nodo(dato,null,this.ultimo);
        if(this.ultimo){
            nuevoNodo.anterior = this.ultimo;
            this.ultimo.seguiente = nuevoNodo;
            this.ultimo = nuevoNodo;
        }else{
            this.ultimo = nuevoNodo;
            this.primero = nuevoNodo;
        };
        this.tamaño;

    }

    InsertarEn(dato,posicion){

        if(posicion < 0 || posicion > this.tamaño){
            return null;
        };

        const nuevoNodo = new Nodo(dato,null,null);
        let Posicionactual = this.primero;
        let anterior;
        if(posicion === 0){
            nuevoNodo.seguiente = Posicionactual;
            Posicionactual.anterior = nuevoNodo;
            this.primero = nuevoNodo;
        }else{
            for(let i = 0; i < posicion; i++){
                anterior= Posicionactual;
                Posicionactual = Posicionactual.seguiente;
            };

            nuevoNodo.seguiente = Posicionactual;
            nuevoNodo.anterior = anterior;
            Posicionactual.anterior = nuevoNodo;
            anterior.seguiente = nuevoNodo;
        };
        this.tamaño++;
    }


        /**Eliminar */

    EliminarAlPrincipio(){
        if(!this.primero){
            return null;
        }
        const valorRetorno = this.primero.dato;
        if(this.primero === this.ultimo){
            this.primero = null;
            this.ultimo= null;
        }else{
            this.primero = this.primero.seguiente;
            this.primero.anterior =null;
        };
        this.tamaño--;
        return valorRetorno;
    };

    EliminarAlFinal(){
        if(!this.ultimo){
            return null;
        };
        const valorRetorno = this.ultimo.dato;
        if(this.primero === this.ultimo){
            this.primero = null;
            this.ultimo = null;
        }else{
            this.ultimo = this.ultimo.anterior;
            this.ultimo.seguiente = navigator;
        };
        this.tamaño--;
        return valorRetorno;
    };

    EliminarTodo(){

        let actual = this.primero;
        let anterior = null;
         while(actual != null){
            if(!anterior){
                this.EliminarAlPrincipio();
            }else if (!actual.seguiente){
                this.EliminarAlFinal();
            }else{
                anterior.seguiente = actual.seguiente;
                anterior.seguiente.anterior = anterior;
            };
            this.tamaño --;
            return actual.dato;
         };
         return null;
    }









    mostrarTodo(){
        let actual = this.primero;
        let resultado = '';

        while(actual){
            resultado += actual.dato + '<->';
            actual = actual.seguiente;
        };
        return resultado += 'x'
    };

    MostrarAlRevez(){
        let PosicionActual = this.ultimo;
        let resultado = '';


        while(PosicionActual){
            resultado += PosicionActual.dato + ' <->';
            PosicionActual = PosicionActual.seguiente;
        };
        return resultado +=' X '
    };


    Tamaño(){
        return this.tamaño;
    };
    EstaVacio(){
        return this.tamaño === 0;
    }

}


let Lista = new DobleListaEnlazada();



Lista.añadirAlUltimo('B')
Lista.añadirAlUltimo('o')
Lista.añadirAlUltimo('h')

Lista.AñadirAlPrincipio("f")
Lista.AñadirAlPrincipio("a")
Lista.AñadirAlPrincipio(12)
Lista.InsertarEn('j',2)


console.log(Lista.mostrarTodo())

// console.log(Lista.Tamaño());

console.log(Lista.MostrarAlRevez())

// console.log(Lista.EstaVacio())

