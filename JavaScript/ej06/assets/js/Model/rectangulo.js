var App = App || {Model : {}};

App.Model.Rectangulo = (function() {
    var _alto;

    function Rectangulo(x, y, lado, alto) {
        App.Model.Cuadrado.call(this, x, y, lado);

        _alto = (typeof alto === 'number') ? alto : 0;

    }




    /*Indicamos el padre */
    Rectangulo.prototype = Object.create(App.Model.Cuadrado.prototype);
    Rectangulo.prototype.constructor = Rectangulo;


    Rectangulo.prototype.GetAlto = function() {
        return _alto;
    };


    Rectangulo.prototype.setAlto = function(Alto) {
        _alto = (typeof Alto === 'number') ? Alto : _alto;
    };

    Rectangulo.prototype.GetArea = function() {
        return (_alto * this.GetAlto);
    };



    return Rectangulo;




});
