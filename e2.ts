// 2. A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes.
// como adicionar os meses de "fev", "mai", "ago", "nov" nas posições corretas?

const meses : Array<string> = [
  'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

meses.splice(1, 1, 'fev');
meses.splice(4, 0, 'mai');
meses.splice(7, 0, 'ago');
meses.splice(10, 0, 'nov');

console.log(meses);

