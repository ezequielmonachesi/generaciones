class Persona{
    #nombre
    #edad
    #sexo
    #peso
    #altura
    constructor(nombre, edad, sexo, peso, altura){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#sexo=sexo;
        this.#peso=peso;
        this.#altura=altura;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre=nuevoNombre;
    }
    get edad(){
        return this.#edad;
    }
    set edad(nuevaEdad){
        this.#edad=nuevaEdad;
    }
    get sexo(){
        return this.#sexo;
    }
    set sexo(nuevoSexo){
        this.#sexo=nuevoSexo;
    }
    get peso(){
        return this.#peso;
    }
    set peso(nuevoPeso){
        this.#peso=nuevoPeso;
    }
    get altura(){
        return this.#altura;
    }
    set altura(nuevaAltura){
        this.#altura=nuevaAltura;
    }

    mostrarGeneracion(){
        if(2023-this.#edad >= 1994 && 2023-this.#edad <= 2010){
        alert(`${this.#nombre} pertenece a la Generación Z. Rasgo característico: Irreverancia `)
        }else if (2023-this.#edad >= 1981 && 2023-this.#edad <= 1993){
            alert(`${this.#nombre} pertenece a la Generación Y. Rasgo característico:  Frustración `)
        }else if (2023-this.#edad >= 1969 && 2023-this.#edad <= 1980){
            alert(`${this.#nombre} pertenece a la Generación X. Rasgo característico: Obsesión por el éxito`)
        }else if (2023-this.#edad >= 1949 && 2023-this.#edad <= 1968){
            alert(`${this.#nombre} pertenece a la Generación Baby Boom. Rasgo característico: Ambición `)
        }else{
            alert(`${this.#nombre} pertenece a la Generación Silent Generation. Rasgo característico: Austeridad `)
        }
    }
    
    esMayorDeEdad(){
        this.#edad >= 18 ? alert(`${this.#nombre} es mayor de edad `): alert(`${this.#nombre} es menor de edad `)
    }
    mostrarDatos(){
        alert(`Nombre: ${this.#nombre}, Años: ${this.#edad}, Sexo: ${this.#sexo}, Peso: ${this.#peso}Kg, Altura: ${this.#altura}cm`)
    }
}


let nombre = document.querySelector('#nombre');
let edad = document.querySelector('#edad');
let sexoM = document.querySelector('#masculino');
let sexoF = document.querySelector('#femenino');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let crearPersona = document.querySelector('#crearPersona');
let persona
let mostrarDatos = document.querySelector('#mostrarDatos');
let mostrarGeneracion = document.querySelector('#mostrarGeneracion');
let mayorDeEdad = document.querySelector('#mayorDeEdad');

crearPersona.addEventListener('click', ()=>{
    persona = new Persona(nombre.value, edad.value, sexo.value, peso.value, altura.value);
})

mostrarDatos.addEventListener('click', ()=>{
    persona.mostrarDatos()
})
mostrarGeneracion.addEventListener('click', ()=>{
    persona.mostrarGeneracion()
})
mayorDeEdad.addEventListener('click', ()=>{
    persona.esMayorDeEdad()
})

        
// let random = Math.floor(Math.random() * 3) + 1;
/* 
let juan = new Persona('Juan', 25, 36368963, 'M', 80, 180)
let jose = new Persona('Jose', 90, 567890, 'M', 50, 160)
let damian = new Persona('Damian', 50, 17654987, 'M', 70, 155)
let emilse = new Persona('Emilse', 10, 40678234, 'F', 30, 120)

document.write(`Dni de ${juan.nombre}: ${juan.dni} <br>`);
console.log(juan.dni);
juan.mostrarGeneracion();
juan.esMayorDeEdad();
juan.generaDNI();
console.log(juan.dni);
document.write(`Nuevo Dni de ${juan.nombre}: ${juan.dni}`) */