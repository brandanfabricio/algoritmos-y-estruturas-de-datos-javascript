/*

  apeend--->    adjuntar

 insert-----> insertar

delete------>Eliminar

  delete tile------>borrar cola


 
-fromArraty------->deArray

 toArray-----> aArray

toString------->Encadenar

reverso------->reverso

*/

class LinkdListItem{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    // prepemd--->   anteponer
    anteponer(value){
        const newItem = new LinkdListItem(value,this.head);
        this.head = newItem;

    }
    /*Pasemos ahora a la función find que buscará y devolverá el item de la lista con un valor dado.*/
    // find------->encontrar

    encontrar(value){
        if(!this.head){
            return null;

        }
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }
    /*También podemos crear una función deleteHead para borrar elementos por la cabecera, ya que es lo más óptimo en este tipo de listas.*/
    // deleteHeadt------>borrarCabeza
    borrarCabeza(){
        if(this.head){
            if(this.head.next){
                const secondNode = this.head.next;
                this.head = secondNode;
            }else{
                this.head = null;
            }
        }
    }
    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

}

let list = new LinkedList();
list.anteponer("a");
list.anteponer("b");
list.anteponer("c");
console.log('----------------------')
console.log(list);
console.log('----------------------')

console.log('----------------------')

list.print();

console.log('----------------------')
