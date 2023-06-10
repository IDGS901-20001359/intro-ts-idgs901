
//funcion tipica no regresa nada para eso agregas ':void'
//recibe dos parametros de tipo entero dentro de sumar
function sumar(a:number,b:number):void{
    console.log(a+b)
}
let num=sumar(3,5)
console.log(num)

//declaras variables dentro del sumar2()
//funcion tipica para que te regrese un entero de resultado ':number' despues del sumar2()
function sumar2(a:number,b:number):number{
    let tem=a+b
    return tem
}

//'n3:number=2' sino pasas el valor por defecto es 2
function operasBas(n1:number,n2:number,n3:number=2):number{
    let tem=n1*n3
    return tem
}

console.log(operasBas(3,0,5))

//pasar objetos a las funciones osea una funcion que resiva objetos
interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calculaEdad(mascota:Mascota, x:number):void{
    mascota.edad+x;
    console.log(mascota)
}

const nuevaMascota:Mascota={
    nombre: 'Black',
    edad: 3,
    mostrarEdad(){
        console.log('La edad es: ',this.edad)
    }
}
//usas la funcion
calculaEdad(nuevaMascota,2)

//funcion anonima
const funcSumar=function(n1:number,n2:number):number{
    return n1+n2
}
console.log(funcSumar(4,9))


///parametros Rest en funciones
function calcular2(...valores:number[]){
    let suma=0;
    for(let x=0; x<valores.length; x++)
        suma += valores[x];
    return suma; 
}
console.log(calcular2(10,2,3,4)) //de resultado te muestra 19 que es la suma de todos los numeros
console.log(calcular2(1,2)) //de resultado te muestra la suma de todos los numeros que es 3