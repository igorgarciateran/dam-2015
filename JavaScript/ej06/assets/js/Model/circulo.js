var App = App || {    Model: {}};

App.Model.Circulo = (function() {

    var _radio;


    function Circulo(x, y, Radio) {

        /*El metodo CALL, injecta el contexto*/
        App.Model.Shape.call(this, x, y);
        //Apply y Bind son parecidos
        //apply (this, [x,y])
        //bind (this)(x,y)
        _radio = (typeof Radio === 'number') ? Radio : 0;
    }





    /*HERENCIA*/

    /*Indicamos el padre */
    Circulo.prototype = Object.create(App.Model.Shape.prototype);
    Circulo.prototype.constructor = Circulo;



    Circulo.prototype.GetRadio = function() {
        return _radio;
    };


    Circulo.prototype.setRadio = function(radio) {
        _radio = (typeof radio === 'number') ? radio : _radio;
    };

    Circulo.prototype.GetArea = function() {
        return Math.PI * m.pow(radius, 2);
    };

    return Circulo;
})();
