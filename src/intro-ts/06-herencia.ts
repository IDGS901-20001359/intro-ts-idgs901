class Persona5{
    //protected: datos protegidos si quiere acceder desde fuera no te dejara
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
    }
}

//como heredar para ello lo haces con extends 
class Empleado extends Persona5{
    private sueldo:number;
    constructor(nom:string, edad:number, sueldo:number){
        //usas la funcion super para pasarle al padre los valores
        super(nom, edad);
        this.sueldo=sueldo;
    }
    //tambien para imprimir lo haces con la palabra super
    imprimir(){
        super.imprimir()
        console.log(`Sueldo: ${this.sueldo}`)
    }
}
const persona6=new Persona5('Alan',20)
persona6.imprimir()
const empleado = new Empleado('Ana',22,2001)
empleado.imprimir()

