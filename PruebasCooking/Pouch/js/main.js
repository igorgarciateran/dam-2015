(function() {

    var db;
    var Nombre = 'pruebax10';

    var $BotInsertar = $('insertar');
    var $BotBorrar = $('borrar');
    var $texto = $('texto');


    $BotInsertar.on('click', insertar($texto));
    console.log('añadido evento');




    var Datos = {
        //_id: '1',
        nombre: 'primero'
       // fecha: 1 / 10 / 15
    };



    var init = function(success) {
        if (db === undefined) {
            db = new PouchDB(Nombre);
            console.log(db);
        }
    };


    var insertar = function(Dato) {

        console.log(Dato);
        db.post(Dato, function(err, result) {
            if (!err) {
                console.log('Successfully posted :' + Dato.nombre);
            } else {
                console.log(err + '   ' + Dato.nombre);
            }
        });

    };

    var Modificar = function(Dato, Rev) {
        db.put(DatoRev);

        console.log('modificado');
    };



    var MeteDatos = function() {
        insertar(Datos);
        Datos._id = '2';
        Datos.nombre = 'segundo';
        insertar(Datos);
        Datos._id = '3';
        Datos.nombre = 'tercero';
        insertar(Datos);
        Datos._id = '4';
        Datos.nombre = ' cuarta';
        insertar(Datos);

    };


    var LeeDatos = function(id) {
        db.get(id.toString(), function(err, doc) {
            if (err) {
                return console.log(err);
            } else {
                console.log('leido : ' + doc);
            }
            // handle doc
        });
    };







    init();
    //MeteDatos();
    // LeeDatos(1);




}());
