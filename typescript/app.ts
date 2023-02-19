function DecorarPersona(data: string){
  return function <T extends {new(...args: any[]): {}}>(constructor: T){
    return class extends constructor{
      array = data.split(",");
      Nombre = this.array[0];
      Apellido = this.array[1];
    }

  }
}

@DecorarPersona('Juan,Lopez')
class Persona{
  private nombre: string = "";
  private apellido: string = "";
  private añoNac: number = 0;

  constructor(nombre: string, apellido: string){
    this.nombre = nombre;
    this.apellido = apellido;
  }

  
}

let persona = new Persona("Braian", "Arias");

console.log(persona.toString());