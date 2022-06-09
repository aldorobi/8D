var nombre_alumno_array = [];

function enviar(){
    var ver_alumno = [];


    for (var j = 1; j <= 4; j++){
        var nombre_alumno = document.getElementById("nombre_alumno_"+j).value;
        console.log(nombre_alumno);
        nombre_alumno_array.push(nombre_alumno);
    }

    console.log (nombre_alumno_array);

    document.getElementById("ver_nombre").innerHTML = nombre_alumno;
    document.getElementById("boton_enviar").style.display = "none";
    document.getElementById("boton_ordenar").style.display = "inline-block";
}

function ordenar(){
    nombre_alumno.sort();
    console.log(nombre_alumno);
    document.getElementById("ver_nombre").innerHTML = nombre_alumno;

}