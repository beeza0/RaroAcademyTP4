// 4. ainda com o mesmo exemplo dos alunos, implementar agora um método chamado `orderBy`. 
// Esse método deverá receber um parâmetro do tipo array de objetos, e outro parâmetro, 
// um array de strings. O método deverá retornar um novo array, com os objetos ordenados 
// de acordo com o critério do array de strings. Importante: O array original deve ser 
// mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

interface student {
    nome : string,
    nota: number,
    bolsista: boolean
};

const alunos: Array<student> = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const keysOfStudents: Array<keyof student> = Object.keys(alunos[0]) as Array<keyof student>

const orderBy = (students: Array<student>, args: Array<keyof student>) : Array<student> => {
    let newStudentsArray = students.map((student) => { return {...student}})
    let argsToRemove = diferencial(keysOfStudents, args)
    newStudentsArray.forEach((student: student) => {
        argsToRemove.forEach((arg: keyof student) => {delete student[arg]})
    })
    sortByFirstArg(newStudentsArray, args[0])
    return newStudentsArray
};

// Function from exercise 6 of TP3 
const diferencial = (a: Array<keyof student>, b: Array<keyof student>) : Array<keyof student> => { 
    let resultantArray = [...a]
    for (let i = 0; i < b.length; i++) {
        if(resultantArray.includes(b[i])) resultantArray.splice((resultantArray.indexOf(b[i])), 1)
    }
    return resultantArray
};

const sortByFirstArg = (students: Array<student>, firstArg: keyof student) : void => {
    if(typeof(students[0][firstArg]) === 'number') {
        students.sort((a: student, b: student) => {
            let aNumber = a[firstArg] as unknown as number
            let bNumber = b[firstArg] as unknown as number
            return aNumber - bNumber
        })
    } else if (typeof(students[0][firstArg]) === 'string') { 
        students.sort((a: student, b: student) => {
            let aString = a[firstArg] as unknown as string
            let bString = b[firstArg] as unknown as string
            return aString.localeCompare(bString)
        })
    } else {}
}

const orderedArray = orderBy(alunos, ['nota', 'nome']);

console.log(alunos, orderedArray);


