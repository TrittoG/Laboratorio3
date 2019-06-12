//al inicializar la pagina
$(document).ready(function(){

    alert("Hola mundo");

});


$(document).ready(inicializar);

function inicializar()
{
    alert("inicializar");
}


$(function(){

    alert("ready abreviado");

});


//eventos

$("p").mouseover(function(){

    $("p").css("color", "yellow");
});


$("·miBtn").click(function(){

    
});


console.log($("#miP").text());