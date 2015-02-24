var App = App || {  Model: {} };


App.Model.Cuadrado = (function() {
    var _lado;

    function Cuadrado(x, y, lado) {
        App.Model.Shape.call(this, x, y);
        _lado = (typeof lado === 'number') ? lado : 0;

    }




	/*Indicamos el padre */
		Cuadrado.prototype=Object.create(App.Model.Shape.prototype);
		Cuadrado.prototype.constructor=Cuadrado;


       Cuadrado.prototype.GetAncho=function(){
        	return _lado;
        };


        Cuadrado.prototype.setAncho=function(lado){
        	 _lado=(typeof lado === 'number') ? lado : _lado;
        };

        Cuadrado.prototype.GetAncho=function(){
             return (_lado*_lado);
        };


return Cuadrado;

}());
