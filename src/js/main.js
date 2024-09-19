//
//Evento cambia de imagen y el texto al seleccionar otro modelo de carro
//

const eleccion = document.getElementById("select-modelo");
const auto = document.getElementById("automovil");
const caracteristicas = document.querySelector(".features-container");
const descripcion = [];

descripcion.push("<p>El Toyota Corolla 2025 destaca por su diseño moderno, opciones híbridas, eficiencia de combustible y avanzadas tecnologías de seguridad e infoentretenimiento, manteniendo su confiabilidad característica.</p>");
descripcion.push("<p>La nueva Hilux 2025 redefine la potencia y durabilidad. Con un diseño robusto y tecnologías avanzadas, está preparada para enfrentar cualquier terreno con eficiencia y comodidad. Ideal para el trabajo y la aventura.</p>");
descripcion.push("<p>La 4Runner 2025 combina un rendimiento todoterreno sin concesiones con un diseño audaz y características de lujo. Su capacidad off-road y su tecnología innovadora te llevarán a donde quieras llegar, con estilo y confianza.</p>");
descripcion.push("<p>El Land Cruiser 2025 es la máxima expresión de lujo y fuerza. Equipado con lo último en tecnología y un desempeño imponente, este SUV está diseñado para dominar los caminos más desafiantes mientras ofrece un confort excepcional.</p>");

eleccion.addEventListener("change", (event) => {
    auto.setAttribute("src", "../src/img/pngwing.com ("+ eleccion.selectedOptions[0].value +").png");
    caracteristicas.innerHTML = "<h2>" + eleccion.selectedOptions[0].text + "</h2>" + descripcion[eleccion.selectedOptions[0].value];
});
