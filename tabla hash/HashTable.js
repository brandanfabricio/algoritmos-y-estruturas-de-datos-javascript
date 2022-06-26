class TablaHash{
    constructor(){
        this.tabla = new Array(127);
        this.tamaño = 0;
    }

    _hash(llave){
        let hash = 0;
        for (let i = 0; i < llave.length; i++) {
             hash += llave.charCodeAt(i);
        }
        return hash % this.tabla.length;
    }

    set(llave,valor){
        const indice = this._hash(llave);
        if(this.tabla[indice]){
            for(let i = 0; i<this.tabla[indice].length; i++){
                if(this.tabla[indice][i][0]=== llave){
                    this.tabla[i][1] = valor;
                return;
                }

            }
            this.tabla[indice].push([llave,valor]);

        }else{

            this.tabla[indice] = [];
            this.tabla[indice].push([llave,valor])

        }


        this.tamaño++;
    }
    get(llave){
        const indice = this._hash(llave);
        if(this.tabla[llave]){
            for(let i = 0; i < this.tabla.length; i++){
                if(this.tabla[indice][i][0]=== llave){

                    return this.tabla[indice][i][1];
                }
            }
        }
        return undefined;
    }

    remover(llave){
        const indice = this._hash(llave);
        if(this.tabla[indice] && this.tabla[indice].length){
           for(let i = 0; i < this.tabla.length; i++){
                    if(this.tabla[indice][i][0] === llave){
                        this.tabla[indice].splice(i,1);
                        this.tamaño--;
                        return true
                    }

           }
        }else{
            return false;
        }
    }

    mostrar(){
        this.tabla.forEach((valor,indice)=>{
            const valorEntradaa = valor.map(([llave,dato])=> `[${llave}: ${dato}]`);
            console.log(valorEntradaa)
        })
        
    }

}

let tabla = new TablaHash();
tabla.set("fb","fabricio Brandan");
tabla.set("tb","Tamara Brandan");
tabla.set("ar","Adriana Roldan");


// console.log(tabla.get('fb'))
// console.log(tabla.get('tb'))
// console.log(tabla.get('ar'))


tabla.set("Spain", 110);
tabla.set("ǻ", 192);

// console.log(tabla.get('Spain'))
// console.log(tabla.get('ǻ'))

// console.log(tabla.get('fb'))

console.log(tabla.mostrar())

console.log(tabla)


/*

class HashTable {
  constructor() {
    this.table  = new Array(137);
    this.values = [];
  }
  
  // Defining the hashing function which allows a sting to be used as a key
  hash(string) {
    const H   = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length -1
    }
    return parseInt(total);
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  put(data) {
    const pos = this.hash(data);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}

// HashTable with Build Chains technique of collision-resolution.
class HashTableChains extends HashTable {
  constructor() {
    super();
    this.buildChains();
  }
  buildChains() {
    for (var i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key][0] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  put(key, data) {
    const pos = this.hash(key);
    let index = 0;
    if(this.table[pos][index] === undefined) {
      this.table[pos][index] = data;
    } else {
      ++index;
      while (this.table[pos][index] !== undefined ) {
        index++;
      }
      this.table[pos][index] = data;
    }
  }

  get(key) {
    const pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] != key) {
      if(this.table[pos][index] !== undefined) {
        return this.table[pos][index]
      } else {
        return undefined;
      }
      index++;
    }
  }
}

// HashTable with Linear Probing technique of collision-resolution.
class HashTableLinearP extends HashTable {
  constructor() {
    super();
    this.values = new Array();
  }

  put(key, data) {
    const pos = this.hash(key);
    if(this.table[pos] === undefined) {
      this.table[pos]  = key;
      this.values[pos] = data;
    } else {
      while(this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos]  = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.values[key]);
      }
    }
  }
}

*/