//desestructuracion de objetos y arreglos
//nos permite acceder a las propiedades d eobjetos sin neceidas de utilizar la gerarquia de subPropiedades
//es una sintaxis mas rapido

interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

//creamos el objeto para agregar valores
const alumno2:Alumno1={
    matricula1:12345,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023
    }
}
//ejemplo para mandar a la consola cualquiera de los datos
console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`Su nombre es: ${alumno2.nombre}`)
console.log(`El año del grupo es: ${alumno2.grupo.year}`)

//variables con constantes y puedes nombrar tu variable ejemplo nombre -> nom
//estructuracion de objetos
const{matricula1,nombre:nom,grupo:xx}=alumno2
const{grupo,year:anio}=xx

console.log(`la matricula es: ${matricula1}`)
console.log(`El nombre es: ${nom}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El Año del Grupo es: ${anio}`)

//desestructuracion de arreglos
const gps:string[]=['IDGS','IEVN','DESARROLLO'];
console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[1]}`)
console.log(`grupo 3: ${gps[2]}`)
//desestructuracion con arreglo involucras corchetes que referencien variables que tomen el valor de la 
//propiedad que quieras
const[a,b]=gps;
console.log(`grupo 1: ${a}`)