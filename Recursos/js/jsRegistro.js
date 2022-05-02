
function fnEnviar(){
    /*Derando variables */
    var vNombre = vApellido = vCorreo = vInstitucion = "";    

    /*Asignando variables */
    //vNombre = document.getElementById("idNombre").value;
    vNombre = $("#idNombre").val();
    vApellido = document.getElementById("idApellido").value;
    vCorreo = document.getElementById("idCorreo").value;
    vInstitucion = document.getElementById("idInstitucion").value;

    /*Insertando datos a la vista html del modal*/
    //document.getElementById("sNombre").innerHTML = vNombre;
    $("#sNombre").text(vNombre);

    

    document.getElementById("sApellido").innerHTML = vApellido;
    document.getElementById("sCorreo").innerHTML = vCorreo;
    document.getElementById("sInstitucion").innerHTML = vInstitucion;

    /*
    if(condicion){
        hacer algo
    }

    if(condicion){
        Hacer Cosa Uno
    }else{
        Hacer Cosa DOS
    }
    */
   if(validaCampos() == true){
        /*var Modalhtml = document.getElementById("mRegistro");
        var MiModal = new bootstrap.Modal(Modalhtml);
        MiModal.show();*/

        $("#mRegistro").modal("show");
        //$("#mRegistro").modal("hide");
   }

    
}

//true =  verdadero
// false =  falso

function validaCampos(){
   var valor = true;
   var vNombre = document.getElementById("idNombre").value;   
   var vApellido = document.getElementById("idApellido").value;
   var vCorreo = document.getElementById("idCorreo").value;
   var vInstitucion = document.getElementById("idInstitucion").value;

   //Objetos

   debugger

   var ObjNombre = document.getElementById("idErrorNombre");
   var ObjApellido = document.getElementById("idErrorApellido");
   var ObjCorreo = document.getElementById("idErrorCorreo");
   var ObjInstitucion = document.getElementById("idErrorInstitucion");

    if(vNombre.trim().length == 0){
        valor = false;
        //Mostrar mensaje de error
        ObjNombre.style.display = "block";
        document.getElementById("idNombre").focus();
    }else{
       // Ocultar mensaje de error.
       ObjNombre.style.display = "none";
    }

    if(vApellido.trim().length == 0){
        valor = false
        ObjApellido.style.display = "block";
        document.getElementById("idApellido").focus();        
    }else{
        ObjApellido.style.display = "none";
    }

    if(vCorreo.trim().length == 0){
        valor = false
        ObjCorreo.style.display = "block";
        document.getElementById("idCorreo").focus();
    }else{
        ObjCorreo.style.display = "none";
    }

    if(vInstitucion.trim().length == 0){
        valor = false
        ObjInstitucion.style.display = "block";
        document.getElementById("idInstitucion").focus();
    }else{
        ObjInstitucion.style.display = "none";
    }

    return valor;
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