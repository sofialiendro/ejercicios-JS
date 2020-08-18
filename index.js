// Ejercicio 6

let gritar = (str) => {
    return `¡${str}!`
}

console.log(gritar("Hola"))


// Ejercicio 7

const obtenerNombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`
}

console.log(obtenerNombreCompleto("Sofía", "Liendro"))


// Ejercicio 8

let saludar = (nombre) => {
    return `Hola, ${nombre}, un gusto conocerte`
}

console.log(saludar("Sofía"))


// Ejercicio 9

let saludarGritando = (nombre, apellido) => {
    let nombreCompleto = obtenerNombreCompleto(nombre, apellido)
    let saludo = saludar(nombreCompleto)
    let grito = gritar(saludo)
    return grito
}

console.log(saludarGritando("Vicky", "Liendro"))