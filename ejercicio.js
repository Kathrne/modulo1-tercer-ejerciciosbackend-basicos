// Importar el módulo 'readline' de Node.js para interactuar con la entrada y salida de la terminal
const readline = require('readline');

// Crear una interfaz readline para leer desde el stdin y escribir en el stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función principal que inicia el programa y muestra el menú de opciones al usuario
function iniciar() {
    rl.question("Digite la opcion: ", (opcion) => {
        // Utilizar parseInt para convertir la opción a un número entero
        if (parseInt(opcion) === 1) {
            ejercicio1()
        } else if (parseInt(opcion) === 2) {
            ejercicio2()
        } else if (parseInt(opcion) === 3) {
            ejercicio3()
        } else if (parseInt(opcion) === 4) {
            ejercicio4()
        } else if (parseInt(opcion) === 5) {
            ejercicio5()
        } else if (parseInt(opcion) === 6) {
            ejercicio6()
        } else if (parseInt(opcion) === 7) {
            ejercicio7()
        } else if (parseInt(opcion) === 8) {
            iniciar() // Volver al menú principal
        }
    })
}

// Iniciar el programa
iniciar()

// Función para el ejercicio 1: Evaluar si un número es positivo, negativo o cero
function ejercicio1() {
    // Función interna para evaluar el número ingresado
    function evaluar(numero) {
        if (numero >= 1) {
            return console.log("El numero " + numero + " es positivo")
        } else if (numero <= -1) {
            return console.log("El numero " + numero + " es negativo")
        } else {
            return console.log("El numero es 0");
        }
    }

    // Pedir al usuario que ingrese un número
    rl.question("Ingrese un número: ", (numero) => {
        // Llamar a la función evaluar con el número ingresado
        const num = evaluar(numero);
    })
    // Volver al menú principal
    iniciar()
}

// Define las demás funciones de ejercicios aquí, similar a ejercicio1

// Función para iniciar el ejercicio 2: Calcular el número mayor entre tres números
function ejercicio2() {
    // Función interna para calcular el número mayor
    function calcularMayor(numero1, numero2, numero3) {
        if (parseFloat(numero1) >= parseFloat(numero2) && parseFloat(numero1) >= parseFloat(numero3)) {
            return console.log(numero1 + " es mayor")
        } else if (parseFloat(numero2) >= parseFloat(numero1) && parseFloat(numero2) >= parseFloat(numero3)) {
            return console.log(numero2 + " es mayor")
        } else if (parseFloat(numero3) >= parseFloat(numero1) && parseFloat(numero3) >= parseFloat(numero2)) {
            return console.log(numero3 + " es mayor")
        }
    }

    // Pedir al usuario que ingrese tres números
    rl.question("Ingrese el primer número: ", (numero1) => {
        rl.question("Ingrese el segundo número: ", (numero2) => {
            rl.question("Ingrese el tercer numero: ", (numero3) => {
                // Llamar a la función calcularMayor con los números ingresados
                const num = calcularMayor(numero1, numero2, numero3);
            })
        })
    })
    // Volver al menú principal
    iniciar()
}

// Define las demás funciones de ejercicios aquí, similar a ejercicio2

// Función para iniciar el ejercicio 7: Determinar el tipo de vehículo según la categoría ingresada
function ejercicio7() {
    // Pedir al usuario que ingrese la categoría del vehículo
    rl.question("Digite la categoria de vehiculo: ", (categoria) => {
        let tipoVehiculo
        // Utilizar un switch para determinar el tipo de vehículo según la categoría
        switch (categoria) {
            case 'Moto':
                tipoVehiculo = "Motocicleta"
                break
            case 'Auto':
                tipoVehiculo = "Automovil"
                break
            case 'Camion':
                tipoVehiculo = "Super Camion"
                break
            case 'Bicicleta':
                tipoVehiculo = "Super bicicleta"
                break
            default:
                tipoVehiculo = "La categoria digitada no existe"
                break
        }
        // Imprimir el tipo de vehículo
        console.log(tipoVehiculo)
        // Volver al menú principal
        iniciar()
    })
}
