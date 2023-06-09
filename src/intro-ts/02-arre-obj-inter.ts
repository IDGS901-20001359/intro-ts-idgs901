
//creas y defines arreglo
//nota: no pueden existir dos variables con el mismo nombre
let vector1:Array<number>=[9,8,7,6]
vector1.push(10)
vector1[1]=22
for(let tem of vector1)
    console.log(tem)

//tomar el valor que tu quieras dentro del array
let tem:(number|string)[]=[]
tem.push('mario')
tem.push(123)

//definir tipos de datos a partir de la interface
//signo de interrogacion al final de una variable delcarada quiere decir que el tipo de dato es opcional
interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}

//definir objetos 
const alumno:Alumno={
    //asignas propiedades del objeto de clarando primero el interface de Alumno
    matricula:1234,
    nombre:'mario',
    edad:21,
    email:'mario@gmail.com'
}
//imprimes alumno
console.table(alumno)