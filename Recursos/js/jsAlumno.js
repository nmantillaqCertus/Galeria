$(document).ready(function() {    
    for(let f=0; f<Alumno.length; f++){
        $("#idSelectAulumno").append('<option value="'+Alumno[f].id+'">'+Alumno[f].nombre+' '+Alumno[f].Apellido+'</option>');
    }
});


//USOS VAR LET CONST
    //const prueba = "Hola";
    //let prueba = "Hola 2";


function fnFormulario(){
    const AuxId = $("#idSelectAulumno").val();    
    let AlumnoDetalle = Alumno.find(x=> x.id == AuxId);

    /*Poblando Formulario*/
    $("#idNombre").val(AlumnoDetalle.nombre);
    $("#idApellido").val(AlumnoDetalle.Apellido);
    $("#idEdad").val(AlumnoDetalle.Edad);
    $("#idDireccion").val(AlumnoDetalle.Direccion);
    $("#idsalario").val(AlumnoDetalle.salario());

    $("#idDeporte").val(AlumnoDetalle.Hobby.Deporte);
    $("#idMusica").val(AlumnoDetalle.Hobby.Musica);
        
    /*Poblando Antes*/
    $("#idNombreAntes").empty();
    $("#idDetalleAntes").empty();

    $("#idNombreAntes").text(AlumnoDetalle.nombre + " "+ AlumnoDetalle.Apellido);

    $("#idDetalleAntes").append(`
        <li>Edad: ${AlumnoDetalle.Edad}</li>
        <li>Dirección: ${AlumnoDetalle.Direccion}</li>
        <li>Salario: ${AlumnoDetalle.salario()}</li>
        <li>Deportes:
            <div>
                <span>${AlumnoDetalle.Hobby.Deporte}</span>
                <span>${AlumnoDetalle.Hobby.Musica}</span>
            </div>
        </li>`);

    /*$("#idDetalleAntes").append(
        '<li>Edad: '+AlumnoDetalle.Edad+'</li>'+
        '<li>Dirección: '+AlumnoDetalle.Direccion+'</li>'+
        '<li>Salario: '+AlumnoDetalle.salario()+'</li>'+
        '<li> Deportes:'+
            '<div>'+
                '<span>'+AlumnoDetalle.Hobby.Deporte+'</span><br>'+
                '<span>'+AlumnoDetalle.Hobby.Musica+'</span><br>'+
            '</div>'+
        '</li>'
    );*/
   
}

function fnGuardar(){
    
    const AuxId = $("#idSelectAulumno").val();   
    
    let valUno = $("#idNombre").val().trim();
    var valDos = $("#idApellido").val().trim();
    var valTres = $("#idEdad").val().trim();
    var valCuatro = $("#idDireccion").val().trim();
    var valCinco = $("#idDeporte").val().trim();
    var valSies = $("#idMusica").val().trim();

    for(let f=0; f<Alumno.length; f++){
        if(Alumno[f].id == parseInt(AuxId)){

            Alumno[f].nombre = valUno;
            Alumno[f].Apellido = valDos;
            Alumno[f].Edad = parseInt(valTres);
            Alumno[f].Direccion = valCuatro;
            Alumno[f].Hobby.Deporte = valCinco;
            Alumno[f].Hobby.Musica = valSies;



            $("#idNombreDespues").empty();
            $("#idDetalleDespues").empty();
        
            $("#idNombreDespues").text(Alumno[f].nombre + " "+ Alumno[f].Apellido);
            $("#idDetalleDespues").append(
                '<li>Edad: '+Alumno[f].Edad+'</li>'+
                '<li>Dirección: '+Alumno[f].Direccion+'</li>'+
                '<li>Salario: '+Alumno[f].salario()+'</li>'+
                '<li> Deportes:'+
                    '<div>'+
                        '<span>'+Alumno[f].Hobby.Deporte+'</span><br>'+
                        '<span>'+Alumno[f].Hobby.Musica+'</span><br>'+
                    '</div>'+
                '</li>'
            );
        }
    }

    
}

//${---}

var Alumno = [{
        id:101,
        nombre : "Cesar",
        Apellido: "Mantilla",
        Edad: 30,
        Direccion: "Tulipanes",
        Hobby:{
            Deporte: "Play Station",
            Musica: "All"
        },
        salario: function(){
            var resultado = 0;
            if(typeof(this.Edad) == "string"){
                resultado = parseInt(this.Edad) * 1000;
            }else{
                resultado = this.Edad * 1000;
            }
            return resultado
        }
    },
    {
        id:102,
        nombre : "Cesar2",
        Apellido: "Mantilla2",
        Edad: 30,
        Direccion: "Tulipanes2",
        Hobby:{
            Deporte: "Play Station2",
            Musica: "All2"
        },
        salario: function(){
            var resultado = 0;
            if(typeof(this.Edad) == "string"){
                resultado = parseInt(this.Edad) * 2000;
            }else{
                resultado = this.Edad * 2000;
            }
            return resultado
        }
    },
    {
        id:103,
        nombre : "Cesar3",
        Apellido: "Mantilla3",
        Edad: 30,
        Direccion: "Tulipanes3",
        Hobby:{
            Deporte: "Play Station3",
            Musica: "All3"
        },
        salario: function(){
            var resultado = 0;
            if(typeof(this.Edad) == "string"){
                resultado = parseInt(this.Edad) * 3000;
            }else{
                resultado = this.Edad * 3000;
            }
            return resultado
        }
    },
    {
        id:104,
        nombre : "Cesar4",
        Apellido: "Mantilla4",
        Edad: 30,
        Direccion: "Tulipanes4",
        Hobby:{
            Deporte: "Play Station4",
            Musica: "All3"
        },
        salario: function(){
            var resultado = 0;
            if(typeof(this.Edad) == "string"){
                resultado = parseInt(this.Edad) * 3000;
            }else{
                resultado = this.Edad * 3000;
            }
            return resultado
        }
    }
]