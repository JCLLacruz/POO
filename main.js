// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor (nombre,edad,genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`${this.nombre} tiene ${this.edad} años y es ${this.genero}.`);
    }
}

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre,edad,genero,curso,grupo) {
        super(nombre,edad,genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar () {
        console.log(`El estudiante ${this.nombre} tiene ${this.edad} años y es ${this.genero}, forma parte del curso de ${this.curso} y del grupo ${this.grupo}.`);

    }
}

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero,);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`El profesor ${this.nombre} tiene ${this.edad} años y es ${this.genero}, imparte la asignatura de ${this.asignatura} y del nivel ${this.nivel}.`);    }
}



// Extras:

// Ejercicio POO 2 - kata Mayas y aztecas
// kata mayas y aztecas

// Construye las siguientes clases:

// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power

// attack: Devuelve el valor de power del guerrero

// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
    constructor(life, power){
        this.life = life;
        this.power = power;
    }
    attack(){
        return this.power;
    }
    defend(damage){
        this.life -= damage;
        return this.life;
    }
}

// Maya: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

// drinkColaCao: Suma 10 al poder.

class Maya extends Warrior {
    constructor(life,power,) {
       super(life,power)
    }
    drinkColaCao(){
        this.power += 10;
    }
}
// Aztec: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

// drinkNesquik: Suma 10 a la vida.

class Aztec extends Warrior {
    constructor(life,power,) {
       super(life,power)
    }
    drinkNesquik(){
        this.life += 10;
    }
}

// Realiza la siguiente cadena de intercambio de golpes.
const aztec = new Aztec(100,50);
const maya = new Maya(150,30);
console.log('Aztec const',aztec,'Maya const',maya);
// Azteca bebe nesquik

aztec.drinkNesquik()
console.log('Azetec drink',aztec);

// Maya bebe Cola Cao
maya.drinkColaCao()
console.log('Maya drink',maya);

// Maya ataca a azteca. Azteca defiende.

maya.attack(aztec);
aztec.defend(maya.power);
console.log('Maya atack',maya,'Aztec defend',aztec);

// Azteca ataca a maya. Maya defiende.
aztec.attack(maya);
maya.defend(aztec.power);
console.log('Aztec atack',maya,'Maya defend',aztec);

// Ejercicio POO 3 - Il sogno di volare
// POO - Il sogno di volare
