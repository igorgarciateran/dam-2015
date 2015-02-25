window.onload = function() {

    var enlaces = document.querySelectorAll('.enlace');
    var span = document.querySelectorAll('.adicional.oculto');



    var muestra = function(e) {
        //hace que no se ejecute el comportamiento por defecto
        e.preventDefault();

        if (span.length) {
            span[0].classList.remove('oculto');
        }

        if (enlaces.length) {
            enlaces[0].classList.add('oculto');
        }
    };

    if (enlaces.length) {
        enlaces[0].addEventListener('click', muestra, false);
    }

};
