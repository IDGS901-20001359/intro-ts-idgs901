
class Persona2{
    nombre:string='2';
    edad:number=2;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}
//podemos tenr un constructor vacio que no reciba nada pero en este caso si se utilizo y que lo reciba entre parentesis
let persona:Persona2;
persona=new Persona2('Juan',23)
persona.imprimir();

//Modificadores de acceso a las propiedades y metodos
class Dado{
    private valor:number=0;
    public tirar(){
        this.generar();
    }
    private generar(){
        //Math.floor //que nos de un rendonde entre valores de 6 a 1
        //que te de solo esos valores sin decimales
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`valor: ${this.valor}`);
    }
}
let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

//clase 2
class Persona3{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}
let persona3:Persona3;
persona3=new Persona3('Juan',23)
persona3.imprimir()
