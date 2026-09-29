/* 
Entregable

Requisitos Técnicos:

Estructura de archivos: Crea una carpeta para tu proyecto con un archivo index.html y un archivo main.js en su correspondiente carpeta. Vincula el script en la etiqueta head del HTML con el atributo defer.

Captura de datos:
Usa prompt() para solicitarle mínimo tres datos diferentes al usuario.
Almacenar los datos en variables o constantes según lo solicitado.

Procesamiento:
Conviertelos numeros solicitados vía prompt a tipo number.
Concatena strings con la información solicitada al usuario.
Realiza operaciones matemáticas con los números solicitados.

Salida de datos:
Usa console.log()/alert() para mostrar los diferentes mensajes.

*/

//captura de datos

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const edad = parseInt(prompt("Ingrese su edad"));
const ciudad = prompt("Ingrese su ciudad");

//procesamiento

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

//salida de datos

console.log("Mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años");
console.log("La suma de los números es: " + (numero1 + numero2));
alert("La suma de los números es: " + (numero1 + numero2));
alert("Hola " + nombre + " " + apellido + ", tenés " + edad + " años y sos de " + ciudad);
