
// 5. Na computação, estudamos algumas estruturas de dados importantes, muitas delas baseadas em arrays. 
// Aqui em destaque, dois tipos diferentes, as `filas` e as `pilhas`. As filas são arrays que estabelecem 
// a política de FIFO (First In, First Out), ou seja, o primeiro elemento adicionado é o primeiro a ser removido. 
// As pilhas, por sua vez, são arrays que estabelecem a política de LIFO (Last In, First Out), ou seja, 
// o último elemento adicionado é o primeiro a ser removido. Abaixo, foram iniciadas estruturas de código 
// que implementam ambas estruturas. Pede-se que, utilizando os métodos de adicionar e remover os itens 
// nos arrays, sejam implementados os movimentos corretos para cada estrutura.

function fila() {
  const fila: Array<unknown> = [];

  const adicionar = (elemento: unknown) => {
    return fila.push(elemento)
  };

  const remover = () => {
    return fila.shift()
  };

  return { adicionar, remover };
};

function pilha() {
  const pilha: Array<unknown> = [];

  const adicionar = (elemento: unknown) => {
    return pilha.push(elemento)
  };

  const remover = () => {
    return pilha.pop()
  };

  return { adicionar, remover };
};

const fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);

console.log('valor esperado: 1; valor recebido: ', fila1.remover());
console.log('valor esperado: 2; valor recebido: ', fila1.remover());
console.log('valor esperado: 3; valor recebido: ', fila1.remover());


const pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);

console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
console.log('valor esperado: 1; valor recebido: ', pilha1.remover());
