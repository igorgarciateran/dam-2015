(function() {

 	var db;
    var Nombre = 'pruebax12';

     var init = function(success) {
        if (db === undefined) {
            db = new PouchDB(Nombre);
            console.log(db);
        }
    };


 //inserta en la BD lo que sea
    var insertar = function(Dato) {
        //console.log(Dato);
        db.post(Dato, function(err, result) {
            if (!err) {
                console.log('Successfully posted :' + Dato.nombre);
                console.log(Dato);
            } else {
                console.log(err + '   ' + Dato.nombre);
            }
        });

    };



    

	
}());