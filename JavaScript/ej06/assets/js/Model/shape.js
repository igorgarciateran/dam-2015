var App = App || {Model : {}}; 

 App.Model.Shape=(function() {

    function Shape(x, y) {
    	/*Estas variables seran privadas, estan dentro de una funcion*/
    	var _x,
    		_y;

    		/*Si utilizamos el this, seria publico*/
        _x = (typeof x === 'number') ? x : 0;
        _y = (typeof y === 'number') ? y : 0;

        /* si ponemos la funcion aqui se copia en todas las instancias y ocupa sitio en memoria
        y si hay que modificarla, hay que modificarla en todas las instancias*/
        this.movemalo=function (x,y){
      };


      	/* si lo metemos en el prototype no se copia, hay solo uno al que todos acceden*/
        Shape.prototype.move=function(x,y){
        		_x += (typeof x === 'number') ? x : 0;
        		_y += (typeof y === 'number') ? y : 0;
        };

        Shape.prototype.getX=function(){
        	return _x;
        };

          Shape.prototype.getY=function(){
        	return _y;
        };


        Shape.prototype.setX=function(x){
        	 _x=(typeof x === 'number') ? x : _x;
        };

        Shape.prototype.setY=function(y){
        	 _y= (typeof y === 'number') ? y : _y;
        };

    }

return Shape;

})();
