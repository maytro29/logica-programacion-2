function convertirTemperatura() {
    var temperaturaCelsius = parseFloat(document.getElementById("celsius").value);

    if (temperaturaCelsius > 300 || isNaN(temperaturaCelsius)) {
        alert("La temperatura no es valida, verifica los datos.");
        temperaturaCelsiusInput.value = ""; 
        return; 
    } 

    var seleccion = document.getElementById("seleccion").value;


    var resultado = 0;

    if (seleccion === "Fahrenheit") {
        resultado = (temperaturaCelsius * 9 / 5) + 32;
    } else if (seleccion === "Kelvin") {
        resultado = temperaturaCelsius + 273.15;
    }


    document.getElementById("resultado").innerHTML = resultado.toFixed(2) + " " + "º" + seleccion;
}
