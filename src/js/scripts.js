//JS De registro 
function redirigir(){
    let nombre = document.getElementById('id_nombre').value;
    let telefono = document.getElementById('id_telefono').value;
    let correo = document.getElementById('id_correo').value;
    
    if(nombre == "" || telefono == "" || correo == ""){
        alert("Todos los campos son obligatorios");
        return;
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
            case 'TOYOTA COROLLA 2022':
                infoTexto = 'Motor 2.0<br>4 puertas<br>Transmisión Estandar<br>Precio $22,000';
                break;
            case 'NISSAN NP300 2024':
                infoTexto = 'Motor turbo 2.4<br>4 puertas<br>Transmisión Estandar<br>4x4<br>Full Extras<br>Precio $48,000';
                break;
            case 'TOYOTA HYLUX 2024':
                infoTexto = 'Motor turbo 3.0<br>4 puertas<br>Transmisión Estandar<br>4x4<br>Full Extras<br>Precio $52,000';
                break;
            default:
                infoTexto = 'Selecciona una categoría para ver el descuento';
        }
        //Salida Label
        info_label.innerHTML = infoTexto;
    }
});