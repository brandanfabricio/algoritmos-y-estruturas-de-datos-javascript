class Queue{
    constructor(){
      this.items = [];
    }
     
    //Add a new element in queue
    enqueue(elm){
      this.items.push(elm);
    }
    
    //Remove element from the queue
    dequeue(){
      return this.items.shift();
    }
    
    //Return the first element from the queue
    front(){
      return this.items[0];
    }
    
    //Return the last element from the queue
    rear(){
      return this.items[this.items.length - 1];
    }
    
    //Check if queue is empty
    isEmpty(){
      return this.items.length == 0;
    }
    
    //Return the size of the queue
    size(){
     return this.items.length;
    }
    
    //Print the queue
    print(){
     console.log(this.items.toString());
    };
    
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

