const expect = require('chai').expect    
const stackES6 = require('../pila o stack/stackES6')
/*
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
module.exports =Stack; */
describe('Test la funcion push de la clase stack',function(){

    it('agregar datos a la pila', function(){
         stackES6.push(1);
         stackES6.push(2);
         stackES6.push(3);
        expect(stackES6.peek()).to.equal(1)
    })

}) 