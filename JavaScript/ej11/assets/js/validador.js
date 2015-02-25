HTMLFormElement.prototype.validate = function() {


    var validador = {
        required: function(val) {
            return false;
        },

        email: function(val) {
            return false;
        }
    };



    var required = this.querySelectorAll('.required');


    var validate = function() {

    };



    this.addEventListener('submit', validate, false);

    //campos requeridos, class=required
    //campo email class=email

};



// en el otro js => window.... function ... get element registro.validate
