class threeNodo{
    constructor(valor){
         this.valor = valor;
          this.izquierda = null;
          this.derecha = null;
    }
}

class ArbolDeBusqueda{
        constructor(){
              this.root = null;
        }

        insertar(valor){
            const nuevoNodo = new threeNodo(valor,null,null);

            if(!this.root){
                 this.root = nuevoNodo;
            }else{
                let DatoActual = this.root;
                let isFount = false;
                while (isFount){
                     if(DatoActual.valor === valor){
                        isFount = true;
                        return undefined
                     }
                     if (DatoActual.valor > valor){
                        if(!DatoActual.izquierda){
                            DatoActual.izquierda = nuevoNodo;
                            isFount = true;
                            return  this;
                        }else{
                            DatoActual = DatoActual.izquierda;
                        }
                     }else{
                         if(!DatoActual.derecha){
                            DatoActual.derecha = nuevoNodo;
                            isFount = true;
                            return this;
                         }else{
                            DatoActual = DatoActual.derecha;
                         }
                     }

                }
            }

        }


}


 const three = new ArbolDeBusqueda();
 
 three.insertar(10)
 three.insertar(5)
 three.insertar(15)
 three.insertar(7)
 three.insertar(3)
 