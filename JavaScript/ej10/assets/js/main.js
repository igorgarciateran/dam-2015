window.onload = function() {


    var enlaces = document.getElementById('lista');

    var anade = function() {
        if (enlaces) {

            var NuevoHijo = document.createElement('li');
            NuevoHijo.innerText = 'algo' + (enlaces.children.length + 1);
            //NuevoHijo.addEventListener('click', remove, false);
            enlaces.appendChild(NuevoHijo);
            console.log('li anande');
        }
    };

    var Boton = document.getElementById('miboton');

    if (Boton) {
        Boton.
        console.log('listener anadido');
    }

 /*   var remove = function() {
        console.log(this);
        if (confirm('Seguro que quieres eliminar?')) {
            this.parentNode.removeChild(this);
        }
    };

    //buscamos los li
    var lis = enlaces.querySelectorAll('li');
    if (lis.length) {
        for (var i = lis.length - 1; i >= 0; i--) {
            lis[i].addEventListener('click', remove, false);
        }
    }

    */

    //para no repetir codigo, se puede poner el listenner en el ul
    // asi no se repite codigo. Hay que quitar el de los li
    enlaces.addEventListener('click', remove2, false);
    console.log('listener anadido');

    var remove2 = function(e) {
        console.log(this);
        if (confirm('Seguro que quieres eliminar?')) {
            this.removeChild(e.target);
        }
    };




};
