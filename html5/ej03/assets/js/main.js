window.onload = function() {

    //sessionStorage es a nivel de dominio/aplicacion, no de sesion
    var listaGuardar = document.querySelectorAll(".guardar");
    var Prefix = "EJ03_prefix_";

    var FGuardar = function(e) {
        //se le puede poner un prefijo para que no cojamos variables de otras webs de nuestro dominio.
        //sessionStorage.setItem(Prefix + this.name, this.value);
        sessionStorage.setItem(this.id, this.value);
        //console.log("algo");
    };

    var Escribex = function(e) {
        for (var i = sessionStorage.length - 1; i >= 0; i--) {
            //si ponemos un prefijo, aqui hay que quitarselo
            document.getElementById(sessionStorage.key(i)).value = sessionStorage.getItem(sessionStorage.key(i)) + "SI";
        }
    };

    for (var i = listaGuardar.length - 1; i >= 0; i--) {
        listaGuardar[i].addEventListener('keyup', FGuardar, false);
        console.log("evento puesto guardar");
    }

    var Boton = document.getElementById("abrir");
    Boton.addEventListener('click', Escribex, 'false');
     console.log("evento puesto boton");

    /* if (sessionStorage.length) {
        Escribex();
    } */


};
