//clase de tipo enteros para insertar numeros y se extrae algun numero
class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        //push:meter datos
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        //pop: extraer datos
            return this.vec.pop();
        else
            return null;
    }
}

//clase de tipo string
class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        //push: para meter datos
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        //pop: para extraer datos
            return this.vec.pop();
        else
            return null;
    }
}
let pila1 = new PilaEnteros();
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)
console.log(pila1.extraer());
//cadenas
let pila2 = new PilaString();
pila2.insertar('23')
pila2.insertar('28')
pila2.insertar('2')
console.log(pila2.extraer());

//clase genericas
class PilaGenerica<T>{
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}
let pila3 = new PilaGenerica<number>();
pila3.insertar(23)
pila3.insertar(28)
pila3.insertar(2)
console.log(pila3.extraer());
//cadenas
let pila4 = new PilaGenerica<string>();
pila4.insertar('23')
pila4.insertar('28')
pila4.insertar('2')
console.log(pila4.extraer());

//************************************* */
interface Animal{
    nombre:string;
    edad:number;
}
class Contenedor<T extends Animal>{
    private elementos:T[]=[];
    agregar(elemento: T){
        this.elementos.push(elemento);
    }
    obtenerTodos():T[]{
        //tipo generico de arrgelo de datos
        return this.elementos;
    }
}
const contenedor = new Contenedor<Animal>();
contenedor.agregar({nombre:'Perro',edad:5});
contenedor.agregar({nombre:'Gato',edad:3});

const animales = contenedor.obtenerTodos();
console.log(animales);