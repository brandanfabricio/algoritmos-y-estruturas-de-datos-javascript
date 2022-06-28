class Stack{
    constructor(){
        this.items = [];
    }
    
    push(elemento){
        this.items.push(elemento)
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items.length = 0;
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
module.exports = new Stack;