//recibe una matris

class BinaryHeap{
    constructor(){
        this.lista = [];
    }


    //crear
    montonMax(arr,n,i){
        /*
        let largo = i;
        let izquierda = 2 * i + 1; 
        let derecha = 2 * i + 2;

        if(izquierda < n && arr[izquierda] > arr[largo]){
            largo = izquierda;
        }

        if(derecha < n && arr[derecha] > arr[largo]){
            largo = derecha;

        }

        if(largo != i){
            let temp = arr[i];
            arr[i] = arr[largo];
            arr[largo] = temp;
            this.montonMax(arr,n,largo);
            
        }*/

        let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }

     // If smallest is not root 
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 

        // Recursively heapify the affected sub-tree 
        this.montonMax(arr, n, largest); 
      } 

    }

    Insertar(valor){
        const tamaño = this.lista.length;
        if(tamaño === 0){
            this.lista.push(valor);
        }else{
            this.lista.push(valor);
            for(let i = parseInt(this.lista.length / 2 -1); i >=0; i--){
                this.montonMax(this.lista,this.lista.length,i)
            }
        }
    }


    //remover valor
    Borrar(valor){
        const tamaño = this.lista.length;
            
            //obteber indice
            let i;
        for ( i = 0; i < tamaño; i++ ){
            if(valor === this.lista[i]){
                break;
            }
        }
        //intercambiar number con el ultimo
        [this.lista[i],this.lista[tamaño-1]= [this.lista[tamaño-1],this.lista[i]]];

            //eliminar el ultimo elemento
            this.lista.splice(tamaño-1);

            //apilar el monton de nuevo
            for(let i = parseInt(this.lista.length /2-1); i >= 0; i--){
                this.montonMax(this.lista, this.lista.length,i)
            }
    }

    //Encontrar el maximo
    BuscarMaximo(){
        return this.lista[0]
    }

    //eliminar El maximo 
    BorrarMaximo(){
         this.Borrar(this.lista[0])
    }

    //extrar el maximo 

    ExtraerMaximo(){
        const max = this.lista[0];
        this.Borrar(max);
        return max;
    }
    //tamño del monton
    Tamaño(){
        return this.lista.length;
    }

    //comprobar si esta bacio
    EstaVacia(){
      return  this.lista.length === 0;

    }
    // todo los elementos+
    MostrarTodo(){
       return this.lista;
    }

}


const heap = new BinaryHeap();
heap.Insertar(3)
heap.Insertar(4)
heap.Insertar(9)
heap.Insertar(2)
heap.Insertar(5)

console.log(heap.MostrarTodo());
heap.Borrar(9);
console.log(heap.MostrarTodo());

 heap.Insertar(7);

 console.log(heap.MostrarTodo());

 console.log(heap.BuscarMaximo());
console.log(heap.EstaVacia());
 console.log(heap.Tamaño());





/*

function BinaryHeap(){
    let list = [];
    
    //Heapify
    this.maxHeapify = (arr, n, i) => {
      let largest = i;
      let l = 2 * i + 1; //left child index
      let r = 2 * i + 2; //right child index
  
      //If left child is smaller than root
       if (l < n && arr[l] > arr[largest]) {
             largest = l; 
       }
  
       // If right child is smaller than smallest so far 
       if (r < n && arr[r] > arr[largest]) {
            largest = r; 
       }
  
       // If smallest is not root 
       if (largest != i) { 
            let temp = arr[i]; 
            arr[i] = arr[largest]; 
            arr[largest] = temp; 
  
          // Recursively heapify the affected sub-tree 
          this.maxHeapify(arr, n, largest); 
        } 
    }
    
    //Insert Value
    this.insert = (num) => {
      const size = list.length;
      
      if(size === 0){
        list.push(num);
      }else{
        list.push(num);
  
        //Heapify
        for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
           this.maxHeapify(list, list.length, i); 
        }
      }
    }
    
    //Remove value
    this.delete = (num) => {
      const size = list.length;
      
      //Get the index of the number to be removed
      let i;
      for(i = 0; i < size; i++){
        if(list[i] === num){
          break;
        }
      }
      
      //Swap the number with last element
      [list[i], list[size - 1]] = [list[size - 1], list[i]];
  
      //Remove the last element
      list.splice(size - 1);
      
      //Heapify the list again
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
           this.maxHeapify(list, list.length, i); 
       }
    }
    
    //Return max value
    this.findMax = () => list[0];
    
    //Remove max val
    this.deleteMax = () => {
      this.delete(list[0]);
    }
    
    //Remove and return max value
    this.extractMax = () => {
      const max = list[0];
      this.delete(max);
      return max;
    }
    
    //Size
    this.size = () => list.length;
    
    //IsEmpty
    this.isEmpty = () => list.length === 0;
    
    //Return head
    this.getList = () => list;
  }

  const heap = new BinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);
console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());
*/