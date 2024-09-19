
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('select-modelo').addEventListener('change', cambiarAuto);
    function cambiarAuto(){
        let eleccion = document.getElementById("select-modelo");
        let auto = document.getElementById("automovil");
        let caracteristicas = document.querySelector(".features-container");
        let descripcion = [];

        descripcion.push("<p>El Toyota Corolla 2025 destaca por su diseño moderno, opciones híbridas, eficiencia de combustible y avanzadas tecnologías de seguridad e infoentretenimiento, manteniendo su confiabilidad característica.</p>");
        descripcion.push("<p>La nueva Hilux 2025 redefine la potencia y durabilidad. Con un diseño robusto y tecnologías avanzadas, está preparada para enfrentar cualquier terreno con eficiencia y comodidad. Ideal para el trabajo y la aventura.</p>");
        descripcion.push("<p>La 4Runner 2025 combina un rendimiento todoterreno sin concesiones con un diseño audaz y características de lujo. Su capacidad off-road y su tecnología innovadora te llevarán a donde quieras llegar, con estilo y confianza.</p>");
        descripcion.push("<p>El Land Cruiser 2025 es la máxima expresión de lujo y fuerza. Equipado con lo último en tecnología y un desempeño imponente, este SUV está diseñado para dominar los caminos más desafiantes mientras ofrece un confort excepcional.</p>");

        auto.setAttribute("src", "../src/img/pngwing.com ("+ eleccion.selectedOptions[0].value +").png");
        caracteristicas.innerHTML = "<h2>" + eleccion.selectedOptions[0].text + "</h2>" + descripcion[eleccion.selectedOptions[0].value];
    }
    });

//JS De registro 
function redirigir(){
    let nombre = document.getElementById('id_nombre').value;
    let telefono = document.getElementById('id_telefono').value;
    let correo = document.getElementById('id_correo').value;

    if (nombre.trim() === "" || telefono.trim() === "" || correo.trim() === "") {
        alert("Todos los campos deben estar completos.");
        return false;
    }
    alert(`Estimado ${nombre} su registro se realizo correctamente`);
    window.location.href = './cotizacion.html';
}

//JS Cotización
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('id_categoria').addEventListener('change', labelDescuento);

    function labelDescuento() {
        const categoría_label = document.getElementById('id_categoria').value;
        const info_label = document.getElementById('id_info');
        let infoTexto = '';
        //Logica label
        switch(categoría_label) {
            case 'Corolla 2025':
                infoTexto = 'Motor 2.0<br>4 puertas<br>Transmisión Estandar<br>Precio $28,000';
                break;
            case 'Hylux 2025':
                infoTexto = 'Motor turbo 2.4<br>4 puertas<br>Transmisión Estandar<br>4x4<br>Full Extras<br>Precio $60,000';
                break;
            case '4Runner 2025':
                infoTexto = 'Motor turbo 3.0<br>4 puertas<br>Transmisión Estandar<br>4x4<br>Full Extras<br>Precio $62,000';
                break;
            case 'Land Cruiser 2025':
                infoTexto = 'Motor 4.0 V6<br>4 puertas<br>Transmisión Automática<br>4x4<br>Bildaje nivel 4<br>Full Extras<br>Precio $95,000';
                break;
            default:
                infoTexto = 'Selecciona una categoría para ver el descuento';
        }
        //Salida Label
        info_label.innerHTML = infoTexto;
    }
});

function redirigirRegistro(){
    window.location.href = './src/views/registrarse.html';

}
function redireccionarInicio(){
    window.location.href = '../../index.html';
}

function redireccionarContactanos(){
    window.location.href = 'form.html';
}

function redireccionarContactanosIndex(){
    window.location.href = './src/views/form.html';
}
/////////////////////////////////////////////////////////////////////////

