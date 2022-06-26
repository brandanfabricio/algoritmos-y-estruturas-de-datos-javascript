class ColaElemento{
    constructor(valor,prioridad){
        this.valor = valor;
        this.prioridad = prioridad;
    }
}

class ColaDePrioridad{
    constructor(){
        this.ColaItem= [];

    }
    encolar(valor,prioridad){
            let NuevaCola = new ColaElemento(valor,prioridad);
            let contenido=false;
            for(let i = 0; i < this.ColaItem.length; i++){
                if(this.ColaItem[i].prioridad > NuevaCola.prioridad){
                    this.ColaItem.splice(i,0,NuevaCola);
                    contenido = true;
                    break;
                }
            }
            if(!contenido){
                this.ColaItem.push(NuevaCola);
            }
    }

    desencolar(){
        if(this.isPriorityColaEmpaty()){
            return 'No hay elmento presente en la cola';

        }
        return this.ColaItem.shift();
    }


    isPriorityColaEmpaty(){
        return this.ColaItem.length === 0;
    }


    printPrioridaCola(){
        let resultado = '';
        for(let i = 0; i < this.ColaItem.length; i++){
            resultado += this.ColaItem[i].valor + "  ";
            // return resultado;
        }
        return resultado
    }
    front(){
        if(this.isPriorityColaEmpaty()){
            return 'No hay elmento presente en la cola';
        }
        return this.ColaItem[0];
    }
    rear(){
        if(this.isPriorityColaEmpaty()){
            return 'No hay elmento presente en la cola';
        }
            return this.ColaItem[this.ColaItem.length - 1];
    }
}

let priorityQueue = new ColaDePrioridad()
console.log(priorityQueue.isPriorityColaEmpaty());

console.log(priorityQueue.front());

priorityQueue.encolar("Sonya", 2);
priorityQueue.encolar("John", 1);
priorityQueue.encolar("Alma", 1);
priorityQueue.encolar("Alexander", 2);
priorityQueue.encolar("Arthur", 3);

console.log(priorityQueue.printPrioridaCola());


console.log(priorityQueue.front().valor);
 console.log(priorityQueue.rear().valor);
 console.log(priorityQueue.desencolar().valor);
 priorityQueue.encolar("Harold", 2);
 console.log(priorityQueue.printPrioridaCola());
