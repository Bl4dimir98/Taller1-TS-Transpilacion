console.log("Hola clase de programaciòn visual desde consola");
document.write("Hola clase de programaciòn visual desde la ventana");
document.write("<br>")
document.write("\n BLADIMIR CHICAIZA - 3A - Mat - Programación Visual")
console.log("BLADIMIR CHICAIZA - 3A - MAT")

// Declar otro objeto e imprimier Cliente 2 hacer lo mismo y aumentar los atributos 
// edad, 
// nivel, 
// direccion, 
// email.

class Cliente {
    public id!: number;
    public nombre: string;
    public telefono: number;
    public edad: number;
    public nivel: string;
    public direccion: string;
    public email: string;

    constructor(nombre: string, telefono: number, edad: number, nivel: string, 
        direccion: string, email: string, id?: number) {
        //this.id      = 1;
        this.nombre = nombre;
        this.telefono = telefono;
        this.edad = edad;
        this.nivel = nivel;
        this.direccion = direccion;
        this.email = email
    }

    public saludo() {
        console.log('Hola mi nombre es ' + this.nombre + 
        ' estoy cursando el ' + this.nivel + ' nivel, vivo en ' + this.direccion + 
        ' y  mi email es ' + this.email);
    }

}

// Instanciando Ojetos
let cliente = new Cliente('Kevin Castellanos', 997424842, 20, 'primer', 'El Condado', 'kev-castellano@gmail.com', 1);
console.log(cliente.saludo());
console.log(cliente.nombre, cliente.telefono);
console.log();

let cliente2 = new Cliente('Bladimir Chicaiza', 998203720, 24, 'Tercer', 'San Carlos', 'bag.chicaiza@yavirac.edu.ec', 2);
console.log(cliente2.saludo());
console.log(cliente2.nombre, cliente2.telefono);
console.log(cliente2.nivel);
console.log(cliente2.email);