HTMLFormElement.prototype.validate = function() {


    var validador = {
        required: function(val) {
            //mirar que no este vacio
            return false;
        },

        email: function(val) {
            //mirar que es un mail valido

        //var Validador="/^.@([0-9.\-A-Za-z]+)$/";

        return (val.test("/^.@([0-9.\-A-Za-z]+)$/"));

        }
    };



    var required = this.querySelectorAll('.required');
    var email=this.querySelectorAll('.email');


    var validate = function() {
        for (var i = required.length - 1; i >= 0; i--) {
            validador (required[i]);
        };


        for (var i = email.length - 1; i >= 0; i--) {
           validador (email[i]);
        };

    };



    this.addEventListener('submit', validate, false);
    console.log("Añadido handler");

    //campos requeridos, class=required
    //campo email class=email

};



// en el otro js => window.... function ... get element registro.validate
