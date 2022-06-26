class TrieNodo{
    constructor(key){
            //valor ser el caracter en secuencia
        this.key = key;
        //referencia al  nodo padre
        this.parent = null;
        // refereicia al hijo
        this.childre = {};
        //comprobar si el nodo esa al final
        this.end = false;
    }

}

class Trie{
    constructor(){
        this.item = [];
    }

    //obtener todo las palabras
    obtenerPalabras(){
            //se guarda un arrego con los datos ibtenidos 

        let salida = [];
        let nodo = new TrieNodo();
        //hacemos un recorrido por los item 
        while(nodo !== null){
            //agregamos los nodos al arr salida
            salida.unshift(nodo.key);
            //igualamos al nodo padre 

               nodo = nodo.parent; 
        }
        return salida.join(' ');
    }


    // inserta una palabra en el trie. 
    /*
    
        Compruebe que la palabra que debe agregarse no existe ya en este trie.
A continuación, si hemos atravesado la rama donde esta palabra debería vivir y las palabras aún no existen, insertaríamos un valor en la referencia del nodo donde debería ir la palabra.    
    */
    insertar(palabra){
        // empezamos por la raiz
        
        let nodo = new TrieNodo()
        // por cada caracter de la palabra hacemos un recorrido

        
        for(let i = 0; i < palabra.length; i++){
            // comprueba si existe un nodo de carácter en los hijos.
                if(!nodo.childre[palabra[i]]){
                    // si no existe, lo creamos.
                    nodo.childre[palabra[i]] = new TrieNodo(palabra[i]);
                    // también asignamos el padre al nodo hijo.
                    nodo.childre[palabra[i].parent] = nodo;

                    

                }
                // proceder a la siguiente profundidad en el trie.
                nodo = nodo.childre[palabra[i]];
                // finalmente, verificamos si es la última palabra.
                if(i == palabra.length-1){
                    // si es así, establecemos el indicador final en verdadero
                    nodo.end = true;
        
                }
            }

        }   


    // comprobar si contiene una palabra completa.

    /*
    Por cada personaje de la palabra. Compruebe si existe un nodo de carácter en los elementos secundarios.
    Si existe, proceda a la siguiente profundidad del trígono.
    De lo contrario, devuelve false, ya que no es una palabra válida.
    Al   final devuelve la palabra.
    */
    contiene(palabra){
        let nodo = new TrieNodo();
        // un bucle por cada caracter de la palabra
        for(let i = 0 ; i < palabra.length; i++){
            // comprueba si existe un nodo de carácter en los hijos.
            if(nodo.childre[palabra[i]]){
                // si existe, proceda a la siguiente profundidad del trie.
                nodo = nodo.childre[palabra[i]]
            }else{

                // no existe, devuelve falso ya que no es una palabra válida.
                return false;
            }
            // Terminamos de repasar todas las palabras, pero ¿es una palabra completa?
            return nodo.end;
        }
    }

    /*
      Encuentra la palabra que comienza con el prefijo dado en el Trie.
Para encontrar todas las palabras con prefijo dado, necesitamos realizar dos operaciones.

Primero, asegúrese de que el prefijo realmente tenga palabras.
En segundo lugar, encuentre todas las palabras con el prefijo dado.
    */

// devuelve cada palabra con el prefijo dado
    /**
     * 
     * @param {Strin} prefijo 
     */    
find(prefijo){

        let nodo = new TrieNodo();
        let salida = [];

        // bucle por cada caracter del prefijo

            for(let i = 0 ; i < prefijo.length; i++){

                // asegúrese de que el prefijo realmente tenga palabras

                if(nodo.childre[prefijo[i]]){
                    nodo = nodo.childre[prefijo[i]];
                }else{
                    // no hay ninguno. solo devuélvelo.
                    return  salida;
                }
            }

            // encuentra recursivamente todas las palabras en el nodo

           findAllPalabras(nodo,salida)
                
                return salida;

              }
            

        
        
        
           // función recursiva para encontrar todas las palabras en el nodo dado.
            findAllPalabras(nodo,arr){
                // caso base, si el nodo está en una palabra, empuje a la salida
                if(nodo.end){
                    arr.unshift(nodo.obtenerPalabras());
                }

                // iterar a través de cada hijo, llamar a findAllWords recursivo

                for(let child in nodo.childre){
                    this.findAllPalabras(nodo.childre[child],arr)
                }
            }
        
        /**
         * Eliminación de una palabra del Trie
Para eliminar una clave, no eliminamos el nodo correspondiente a la clave, ya que podría tener algunos hijos que aún contienen una clave. En su lugar, simplemente tenemos que buscarlo y establecer su valor en null.

Sin embargo, para mejorar la eficiencia, si el nodo correspondiente a la clave no tiene hijos o todos sus hijos tienen valores nulos, también podríamos eliminar todo el nodo.
         */
        // elimina la palabra dada
    remover(palabra){

        let nodo = new TrieNodo();
        if(!palabra) return;

        // encuentra y elimina recursivamente una palabra
           const removerPalabra= (nodo,palabra)=>{
               // comprobar si el nodo actual contiene la palabra
                if(nodo.end && nodo.obtenerPalabras() === palabra){
                    // comprobar y ver si el nodo tiene hijos
                    let hasChildren = Object.keys(nodo.childre).length > 0;
                    // si tiene hijos, solo queremos desmarcar el nodo final que marca el final de una palabra.
                    // de esta manera no eliminamos palabras que contienen/incluyen la palabra proporcionada
                    if(hasChildren){
                        nodo.end = false;
                    }else{

                        // elimina la palabra obteniendo el padre y configurando los hijos para vaciar el diccionario
                        nodo.parent.childre = {};
                    }
                    return true;
                }
                // elimina recursivamente la palabra de todos los niños
                for(let key in nodo.childre){
                    removerPalabra(nodo.childre[key],palabra)
                }
                return false; 
           } 



           // elimina recursivamente la palabra de todos los niños
           removerPalabra(nodo,palabra)
        
        
        
    };


}       

/**
 * // we start with the TrieNode
const TrieNode = function (key) {
  // the "key" value will be the character in sequence
  this.key = key;
  
  // we keep a reference to parent
  this.parent = null;
  
  // we have hash of children
  this.children = {};
  
  // check to see if the node is at the end
  this.end = false;
  
  this.getWord = function() {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }

    return output.join('');
  };
}

const Trie = function() {
  this.root = new TrieNode(null);
  
  // inserts a word into the trie.
  this.insert = function(word) {
    let node = this.root; // we start at the root

    // for every character in the word
    for(let i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (!node.children[word[i]]) {
        // if it doesn't exist, we then create it.
        node.children[word[i]] = new TrieNode(word[i]);

        // we also assign the parent to the child node.
        node.children[word[i]].parent = node;
      }

      // proceed to the next depth in the trie.
      node = node.children[word[i]];

      // finally, we check to see if it's the last word.
      if (i == word.length-1) {
        // if it is, we set the end flag to true.
        node.end = true;
      }
    }
  };
  
  // check if it contains a whole word.
  this.contains = function(word) {
    let node = this.root;

    // for every character in the word
    for(let i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (node.children[word[i]]) {
        // if it exists, proceed to the next depth of the trie.
        node = node.children[word[i]];
      } else {
        // doesn't exist, return false since it's not a valid word.
        return false;
      }
    }

    // we finished going through all the words, but is it a whole word?
    return node.end;
  };
  
  // returns every word with given prefix
  this.find = function(prefix) {
    let node = this.root;
    let output = [];

    // for every character in the prefix
    for(let i = 0; i < prefix.length; i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        // there's none. just return it.
        return output;
      }
    }

    // recursively find all words in the node
    findAllWords(node, output);

    return output;
  };
  
  // recursive function to find all words in the given node.
  const findAllWords = (node, arr) => {
    // base case, if node is at a word, push to output
    if (node.end) {
      arr.unshift(node.getWord());
    }

    // iterate through each children, call recursive findAllWords
    for (let child in node.children) {
      findAllWords(node.children[child], arr);
    }
  }

  // removes a word from the trie.
  this.remove = function (word) {
      let root = this.root;

      if(!word) return;

      // recursively finds and removes a word
      const removeWord = (node, word) => {

          // check if current node contains the word
          if (node.end && node.getWord() === word) {

              // check and see if node has children
              let hasChildren = Object.keys(node.children).length > 0;

              // if has children we only want to un-flag the end node that marks the end of a word.
              // this way we do not remove words that contain/include supplied word
              if (hasChildren) {
                  node.end = false;
              } else {
                  // remove word by getting parent and setting children to empty dictionary
                  node.parent.children = {};
              }

              return true;
          }

          // recursively remove word from all children
          for (let key in node.children) {
              removeWord(node.children[key], word)
          }

          return false
      };

      // call remove word on root node
      removeWord(root, word);
  };
}
 * 
 */

/**
 * Pruebas
 * 
 * 
 * Input:
const trie = new Trie();

// insert few values
trie.insert("peter");
trie.insert("piper");
trie.insert("picked");
trie.insert("pickled");
trie.insert("pepper");

// check contains method
console.log(trie.contains("picked"));  
console.log(trie.contains("pepper")); 
trie.remove("pepper");
// check find method
console.log(trie.find("pi"));  
console.log(trie.find("pe")); 

Output:
true
true
["pickled", "picked", "piper"]
["peter"]
 * 
 */