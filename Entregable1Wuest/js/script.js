// Funcion validar usuario
ingreso = false;

function validarUsuario(numeroIntento, cantidadDeIntentos) {
    const user = "nancy";
    const password = "123";

    alert(`Tiene un máximo de ${cantidadDeIntentos} veces para ingresar su contraseña. Este es su ${numeroIntento + 1} intento.`);

    let usuario = prompt("Ingrese su usuario: ");
    let usuarioMinuscula = usuario.toLocaleLowerCase();
    let pass = prompt("Ingrese su contraseña: ");
    if ((usuarioMinuscula === user) && (pass === password)) {
        alert(`Bienvenido ${user}!`);
        ingreso = true;
        return true;
    } else {
        alert(`Los datos ingresados no son correctos. Le quedan ${cantidadDeIntentos - (numeroIntento + 1)} intentos.`)
    }
};


// Funcion de opciones

const opcionesDeIngreso = () => {
    let opcion = prompt("Que desea hacer: \n 1 - Ingresar Dinero \n 2 - Extraer Dinero \n 3 - Consultar Saldo.");
    return Number(opcion)
}

const selector = (opcion, saldoInicial) => {
    switch (opcion) {
        case 1:
            ingresarDinero(saldoInicial)
            break
        case 2:
            extraerDinero(saldoInicial)
            break
        case 3:
            consultarSaldo(saldoInicial)
            break
        default: console.log("ERROR")
            // alert("Ingrese una opción válida.");
    }
};

// Funcion para ingresar dinero

const ingresarDinero = (saldoInicial) => {
    let saldo = 0;
    let dinero = prompt("Ingrese el valor de cuanto dinero desea ingresar: ")
    let dineroProcesado = Number(dinero);
    if ((isNaN(dineroProcesado)) || (dineroProcesado === null)) {
        alert("Por favor ingrese un dato válido.");
    } else {
        saldo = saldoInicial + dineroProcesado;
        alert(`Su saldo actual es de $${saldo}.`);
    }
    return saldo
}

// Funcion para retirar dinero

const extraerDinero = (saldoInicial) => {
    let saldo = 0;
    let dinero = prompt("Ingrese el valor de cuanto dinero desea retirar: ")
    let dineroProcesado = Number(dinero);
    if ((isNaN(dineroProcesado)) || (dineroProcesado === null)) {
        alert("Por favor ingrese un dato válido.");
    } else if (dineroProcesado > saldoInicial){
        alert("Saldo insuficiente para realizar el retiro.");
    } else{
        saldo = saldoInicial - dineroProcesado;
        alert(`Su saldo actual es de $${saldo}.`);
    }
    return saldo
};

// Funcion para consultar saldo

const consultarSaldo = (saldoInicial) => {
    let saldoActual = saldoInicial;
    alert(`Su saldo es de $${saldoActual}.`);
    return saldoActual
};

// Funcion del programa principal
const inicializar = () => {
    let numeroIntento = 0;
    const cantidadDeIntentos = 3;
    let saldoInicial = 25000;

    do {
        validarUsuario(numeroIntento, cantidadDeIntentos)
        if (ingreso) {
            break
        }
        numeroIntento++
    } while (numeroIntento < cantidadDeIntentos)

    if (ingreso) {
        let ciclo = true;
        do {
            selector(opcionesDeIngreso(), saldoInicial);
            ciclo = confirm("Desea continuar?");
        } while (ciclo);
    }
};

inicializar();