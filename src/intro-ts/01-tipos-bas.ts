/*
    TypeScript: Lenguaje con tipos estaticos que permite detectar 
    errores de asignacion en tiempo de desarrollo
*/
//tipos de formas para definir variables
var num1=23
let num2='rcr'
const num3=34

//definicion para typescript
let version:number=2.2
version=23

//establecer string
let nombre:string='Paulina'

//otra forma pero con booleanos
let activo:boolean=true

//usar dos tipos de datos diferentes como numericos, string o booleanos
let matricula:number|string|boolean=1234
matricula='123abc'

//definir arreglos
//let vector:number[]=[]//arreglo vacio
let vector:number[] = [1,2,3,4]
//imprimir y lo mandas a llamar en el main
console.log(vector)

