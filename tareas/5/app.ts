// Crear interfaces
interface mutante{
  name: string;
  realName: string;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface automovil{
    encender:boolean;
    velocidadMaxima:number;
    acelear():void
}

const conducirBatimovil = ( auto:automovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:automovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface personaje{
  reir?: boolean,
  comer?:boolean,
  llorar?:boolean,
}

const guason:personaje = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:personaje ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface gotica{
  (personas:string[]):number
}

const ciudadGotica:gotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface propiedades{
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio(): void
}
class Persona implements propiedades {
  public nombre:string;
  public edad:number;
  public sexo:string;
  public estadoCivil:string;
  imprimirBio(): void{}
}
