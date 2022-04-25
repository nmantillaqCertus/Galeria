
function fnEnviar(){
    /*Derando variables */
    var vNombre = vApellido = vCorreo = vInstitucion = "";


    /*Asignando variables */
    vNombre = document.getElementById("idNombre").value;
    vApellido = document.getElementById("idApellido").value;
    vCorreo = document.getElementById("idCorreo").value;
    vInstitucion = document.getElementById("idInstitucion").value;
    


    /*Insertando datos a la vista html */
    document.getElementById("sNombre").innerHTML = vNombre;
    document.getElementById("sApellido").innerHTML = vApellido;
    document.getElementById("sCorreo").innerHTML = vCorreo;
    document.getElementById("sInstitucion").innerHTML = vInstitucion;

    
    console.log("Nombre: "+vNombre 
    + " Apellido: "+vApellido 
    + " Correo: "+vCorreo
    + "Institución :"+vInstitucion);
}


function nombreFuncion2(valor){
    //codigo para procesar ese valor
}

function nombreFuncion3(valor){
    //codigo para procesar ese valor
    valor = "Estes es el valor: "+valor
    return valor;
}


function nombreFuncion4(valor){
    //codigo para procesar ese valor
    valor = "Profe Necesito Ayuda, no entiendo nada!!"    
}