(function(){   
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        btnEnviar = document.getElementById('enviar');

    var validarNombre = function(e){
        if (formulario.Nombre.value == 0){ 
            alert("Completa el campo Nombre");
                e.preventDefault();
        }
    };          

    var validarEmail = function(e){
        if (formulario.Email.value == 0){ 
            alert("Completa el campo E-mail");
            e.preventDefault();
        }
    };           

    var validarTelefono = function(e){
     if (formulario.Telefono.value == 0){ 
            alert("Completa el campo Telefono");
            e.preventDefault();
        }
    };      

    var validarMensaje = function(e){
        if (formulario.Mensaje.value == ""){ 
            alert("Completa el campo Mensaje");
            e.preventDefault();
        }
    };
    var validar = function(e){  
            validarNombre(e);
            validarEmail(e);
            validarTelefono(e);
            validarMensaje(e);
    };

    formulario.addEventListener("submit", validar);

}())