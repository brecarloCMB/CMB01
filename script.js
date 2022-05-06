

function aplicarDescuento(monto, categoria) {
    var descEstudiante = 1 - 0.8;
    var descTrainee = 1 - 0.5;
    var descJunior = 1 - 0.15;


    switch (categoria) {
        case 1:
            return monto * descEstudiante;
            break;
        case 2:
            return monto * descTrainee;
            break;
        case 3:
            return monto * descJunior;
            break;
        default:
            return "Error";
    }
}


function calcularMonto(){
    var categoria = document.getElementById("inputCategoria");
    var categoriaValue = parseInt(categoria.options[categoria.selectedIndex].value);
    var cantidad = parseInt(document.getElementById("inputCantidad").value);
    var valor = 200;
    var monto = valor * cantidad;
    monto = aplicarDescuento(monto, categoriaValue);
    document.getElementById("totalPagar").innerHTML = "$" + monto.toFixed(2);
}

function borrar(){
    document.getElementById("totalPagar").innerHTML = "";
}