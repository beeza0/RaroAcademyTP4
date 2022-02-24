// 3. Implementar o método de `pick` que receba um parâmetro do tipo array de objetos, 
// e outro parâmetro do tipo array de strings. Este método deverá retornar todos os itens do array original, 
// porém, mantendo somente os atributos com os nomes passados no segundo atributo. 
// Importante: o array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

interface student {
    nome : string,
    nota: number,
    bolsista: boolean
};

type keyOfStudent = keyof student;

const alunos : Array<student> = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const keysOfStudents: Array<keyOfStudent> = Object.keys(alunos[0]) as Array<keyOfStudent>

const pick = (students: Array<student>, args: Array<keyOfStudent>) : Array<student> => {
    let newStudentsArray = students.map((student) => { return {...student}})
    let argsToRemove = diferencial(keysOfStudents, args)
    newStudentsArray.forEach((student: student) => {
        argsToRemove.forEach((arg: keyOfStudent) => {delete student[arg]})
    })
    return newStudentsArray
};

// Function from exercise 6 of TP3 
const diferencial = (a: Array<keyOfStudent>, b: Array<keyOfStudent>) : Array<keyOfStudent> => { 
    let resultantArray = [...a]
    for (let i = 0; i < b.length; i++) {
        if(resultantArray.includes(b[i])) resultantArray.splice((resultantArray.indexOf(b[i])), 1)
    }
    return resultantArray
};

const newStudentsList : Array<student> = pick(alunos, ['nota', 'nota']);

console.log(alunos, newStudentsList);
