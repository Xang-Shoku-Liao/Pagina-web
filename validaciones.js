$(document).ready(function(){
    $("#registroForm").submit(function(event){
        event.preventDefault();
        
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        
        var genero = $("#genero").val();
        var celular = $("#celular").val();

        if(rut.length < 9 || rut.length > 10){
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        }

        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20 ||
            apellidoMaterno.length < 3 || apellidoMaterno.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }
 
        if(genero === ""){
            alert("Por favor, seleccione un Género.");
            return;
        }

        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        alert("¡Registro exitoso!");
    });
});
