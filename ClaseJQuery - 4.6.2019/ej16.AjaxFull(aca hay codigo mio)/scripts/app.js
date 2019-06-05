$(function(){
    inicializarEventos();
});

function inicializarEventos()
{
    $("#btnEnviarAjax").click(enviarAjax);
    $("#btnEnviarGet").click(enviarGet);
    $("#btnEnviarGetMensajes").click(enviarGetMensajes);
    $("#btnEnviarPost").click(enviarPost);
    $("#btnGetJSON").click(getJSON);
    $("#btnLoad").click(usarLoad);
}

function enviarAjax(e)
{
    e.preventDefault();

    //tomo los elementos del html
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    //creo un json con los valores de los input del html
    var parametros = {
        "legajo": legajo,
        "nombre": nombre,
    };

    //recibe un objeto y hace una llamada a ajax al servidor
    $.ajax({
        url: "http://localhost:3000/concatenar",
        data: parametros,
        //type:post, esto para post
        //dataType:'json'
        //funcion para antes de que entre al 4 200
        beforeSend: function(){
            $("#info").html("<img src='./images/spin.gif' alt='preloader'>");
        },

        //funcion que ocurre cuando todo esta correcto
        success:function(respuesta){
            $("#info").html(respuesta);
        },

        //funcion que ocurre cuando hay un error
        error: function(xhr,status){
            alert("Error "+ status + " " + xhr.statusText);
        },

        //funcion que ocurre cuando finaliza la peticion
        complete:function(hr, status){
            alert("Peticion Terminada");
        }
    })

}

function enviarGet(e)
{
    e.preventDefault();

    //tomo los elementos del html
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    //creo un json con los valores de los input del html
    var parametros = {
        "legajo": legajo,
        "nombre": nombre,
    };

    $.get("http://localhost:3000/concatenar", parametros, function(respuesta){

        $("#info").text(respuesta);

    });
}


function enviarGetMensajes(e)
{
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    //creo un json con los valores de los input del html
    var parametros = {
        "legajo": legajo,
        "nombre": nombre,
    };

    $.get("http://localhost:3000/concatenar", parametros, function(respuesta){

        alert("cprrecto");

    })
    .done(function(){
        alert("done");
    })
    .fail(function(){
        alert("fail");
    })
    .always(function(){
        alert("always");
    });
}

function enviarPost(e)
{
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo": legajo,
        "nombre": nombre,
    };
    
    //carga lo del servidor en la variable respuestra
    $.post("http://localhost:3000/loadpost", function(respuesta){
        console.log(respuesta);
        $("#info").html(respuesta);
    });

    //post con parametros
    $.post("http://localhost:3000/saludo",parametros, function(respuesta){
        console.log(respuesta);
    });
        
    
}

function getJSON(e)
{
    e.preventDefault();

    $("#info").load()
}

function usarLoad(e)
{
    e.preventDefault();

    $("#info").load("http://localhost:3000/loadhtml");

}