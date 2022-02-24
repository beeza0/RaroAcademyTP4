// 1. Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. 
// Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?

const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

const fazUmBigMac = (ingredientes: Array<string>): string => {
    const ingredients: Array<string> = [...ingredientes]
    return ingredients.reduce((accumulator: string, ingredient: string): string => {
        return accumulator + ' ' + `${ingredient}`
    })
};

console.log(fazUmBigMac(ingredientes));

