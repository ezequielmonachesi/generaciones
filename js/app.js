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
        alert(`Nombre: ${this.#nombre}\nEdad: ${this.#edad}\nSexo: ${this.#sexo}\nPeso: ${this.#peso} Kg\nAltura: ${this.#altura} cm`)
    }
}


let nombre = document.querySelector('#nombre');
let edad = document.querySelector('#edad');
let sexo = document.querySelector('#sexo');
let altura = document.querySelector('#altura');
let form = document.querySelector('form');
let persona
let mostrarDatos = document.querySelector('#mostrarDatos');
let mostrarGeneracion = document.querySelector('#mostrarGeneracion');
let mayorDeEdad = document.querySelector('#mayorDeEdad');
let personaCreada = document.querySelector('#personaCreada');

form.addEventListener('submit', crearPersona)

mostrarDatos.addEventListener('click', ()=>{
    persona.mostrarDatos()
})
mostrarGeneracion.addEventListener('click', ()=>{
    persona.mostrarGeneracion()
})
mayorDeEdad.addEventListener('click', ()=>{
    persona.esMayorDeEdad()
})
function crearPersona(e){
    e.preventDefault();
    persona = new Persona(nombre.value, edad.value, sexo.value, peso.value, altura.value);
    alert(`Persona creada!`)
    nombre.value = '';
    edad.value = '';
    sexo.value = '';
    peso.value = '';
    altura.value = '';
}