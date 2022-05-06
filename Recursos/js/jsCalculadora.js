

function fnCalcular(){

    var NroUno = "10";

    var AuxNro = parseFloat(NroUno)
    var NroDos = 20;


    return AuxNro + NroDos;

}



//Funciones
function fnCalcular(){}
function fnCalcular(){
    return ""
}
function fnCalcular(val){
    return ""
}

//Condicionales
if(val = true){
    //Hace Algo
}
if(val = true){
    //Hace Algo
}else{
    //Hace otra cosa
}


//Arreglos, arrays, vectores, objetos

var AlumnoDemo = {
    nombre : "",
    Apellido: "",
    Edad: 20,
    Direccion: ""
}

var Alumno = [{
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
                }
            ]