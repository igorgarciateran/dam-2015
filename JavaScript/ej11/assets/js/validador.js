HTMLFormElement.prototype.validate = function() {
    console.log("validate function");

    var errores = [];

    var ShowError = function(msgError) {
        this.parentNode.classList.add('has-error');
        this.parent.querySelectorAll('hidden').item(0).classList.remove('hidden');



        //crear un nodo Span
        var span = document.createElement('span');
        span.classList.add('help-block');
        span.innerText = msgError;

        this.parentNode.classList.add('has-error');

    };



    var ValidateRequired = function(e) {
        errores = [];

        for (var i = required.length - 1; i >= 0; i--) {
            if (validador.required(this)) {
                errores.push(this.name + " requerido ");
            }
        }

        for (i = email.length - 1; i >= 0; i--) {
            if (validador.email(email[i])) {
                errores.push(email[i].name + " no es valido ");
            }
        }

        for (i = Coment.length - 1; i >= 0; i--) {
            if (validador.comentario(Coment[i])) {
                errores.push(Coment[i].name + " mas de 50 caracteres ");
            }
        }

        for (i = Pass.length - 1; i >= 0; i--) {
            if (validador.Password(Pass[i])) {
                errores.push(Pass[i].name);
            }
        }


        if (errores.length) {


            ShowError();

            alert("errores en los campos " + errores.join('\n'));
            //solo si hay errores , para el envio de los datos del form
            e.preventDefault();
        }

    };



    var validate = function(e) {

        for (var i = required.length - 1; i >= 0; i--) {
            if (validador.required(required[i])) {
                errores.push(required[i].name + " requerido ");
            }
        }

        for (i = email.length - 1; i >= 0; i--) {
            if (validador.email(email[i])) {
                errores.push(email[i].name + " no es valido ");
            }
        }

        for (i = Coment.length - 1; i >= 0; i--) {
            if (validador.comentario(Coment[i])) {
                errores.push(Coment[i].name + " mas de 50 caracteres ");
            }
        }

        for (i = Pass.length - 1; i >= 0; i--) {
            if (validador.Password(Pass[i])) {
                errores.push(Pass[i].name);
            }
        }


        if (errores.length) {
            alert("errores en los campos " + errores.join('\n'));
            //solo si hay errores , para el envio de los datos del form
            e.preventDefault();
        }

    };


    this.addEventListener('submit', validate, false);
    console.log("Añadido handler");

    var required = this.querySelectorAll('.required');
    var email = this.querySelectorAll('.email');
    var Coment = this.querySelectorAll('.comentarios');
    var Pass = this.querySelectorAll('.pass');


    var validador = {
        required: function(val) {
            //mirar que no este vacio
            if (val.type === "checkbox") {
                return !(val.checked);
            } else {
                return !(val == undefined) && (val.value == null) && (val.value.trim === "");
            }

        },

        email: function(val) {
            //mirar que es un mail valido

            //var Validador="/^.@([0-9.\-A-Za-z]+)$/";

            return !(/^.@([0-9.\-A-Za-z]+)$/.test(val.value));
        },


        comentario: function(val) {
            return !(val.value.length < 50);
        },


        Password: function(val) {
            //cambiarlo por expresiones regulares!!!!!


            return (!(val.value.length > 6) &&
                (/[a-z]/.test(val.value)) &&
                (/[A-Z]/.test(val.value)) &&
                (/0-9/.test(val.value)));
        }

    };

    //añadir listener a cada uno de los campos
    for (var i = required.length - 1; i >= 0; i--) {
        required[i].addEventListener('blur', validateField, false);
    }
    for (i = email.length - 1; i >= 0; i--) {
        email[i].addEventListener('blur', validateField, false);
    }
    for (i = Coment.length - 1; i >= 0; i--) {
        Coment[i].addEventListener('blur', validateField, false);
    }
    for (i = Pass.length - 1; i >= 0; i--) {
        Pass[i].addEventListener('blur', validateField, false);
    }

};
