// let nombre = prompt("Decime tu nombre.")
// let apellido = prompt("Decime tu apellido.")
// let nombreCompleto = (nombre + " " + apellido)

// Ejercicio 7

const obtenerNombreCompleto = (nombre, apellido) => {
    alert(nombre + " " + apellido)
}

const nombreCompleto = obtenerNombreCompleto("Sofía", "Liendro")

// Ejercicio 8

const saludar = () => {
    alert(`Hola, ${nombreCompleto}. Un gusto conocerte.`)
}

saludar()
const saludo = saludar(nombreCompleto)

// Ejercicio 9

const saludarGritando = () => {
    alert(`¡${saludo}!`)
}

saludarGritando()





