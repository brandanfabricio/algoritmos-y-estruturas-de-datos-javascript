function Queue(){
    let item =[];

   this.enqueue = (elemento)=>{
    item.push(elemento);
   }
   this.dequeue= ()=>{
       return  item.shift()
   }
        this.front = ()=>{
            return item[0]
        }
    this.rear=()=>{
        return item[item.length -1];
    }
    this.isEmpty=()=>{
        return item.length == 0;
    }
    this.size = ()=>{
        return item.length;
    }
    this.print=()=>{
        console.log(item.toString())
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

