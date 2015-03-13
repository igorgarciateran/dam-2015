(function() {

    var db;
    var Nombre = 'pruebax11';

    var textId = document.getElementById("id");
    var BotInsertar = document.getElementById("insertar");
    var BotBorrar = document.getElementById("borrar");
    var BotLeer = document.getElementById("leer");
    var texto = document.getElementById("texto");

    var Receta = {
        idReceta: 3,
        nombreReceta: 'pepinillos en almibar3',
        foto: ''
    };

    var ddoc = {
        _id: '_design/index',
        views: {
            index: {
                map: function mapFun(doc) {
                    if (doc.idReceta) {
                        emit(doc.idReceta, doc.nombreReceta);
                    }
                }.toString()
            },
            otraDiferente: {
                map: function mapfun2(doc) {
                    if (doc.nombreReceta) {
                        emit(doc.idreceta, doc.nombreReceta);
                    }
                }
            }
        }
    };




    var init = function(success) {
        if (db === undefined) {
            db = new PouchDB(Nombre);
            console.log(db);
        }
    };


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

    /*  var Modificar = function(Dato, Rev) {
          db.put(DatoRev);

          console.log('modificado');
      };   */


    var LeeDatos = function() {
        var id = textId.value;
        db.get(id.toString(), function(err, doc) {
            if (err) {
                return console.log(err);
            } else {
                console.log('leido : ' + doc);
                console.log(doc);
                //text.value=doc.nombreReceta;
            }
            // handle doc
        });
    };



    var Vista = function() {
        // save the design doc
        db.put(ddoc).catch(function(err) {
            if (err.status !== 409) {
                throw err;
            }
        });
    };


    var BusquedaVista = function() {
        db.query('otraDiferente', {
            //la key es el campo por el que quiero buscar
            key: 'hola',
            include_docs: true
        }, function(err, response) {
            if (err) {
                return console.log(err);
            }
            console.log(response);
        });
    };



    var Busqueda = function(doc) {
        function map(doc) {
            // join artist data to albums
            if (doc.nombre) {
                emit(doc.nombre, {
                    id: doc.nombre,
                    nombre: doc.fecha

                });
            }
        }
        db.query(map, {
            include_docs: true
        }, function(err, response) {
            if (err) {
                return console.log(err);
            }
            console.log(response);
        });
    };


    var Meter = function() {
        Platos.idPlato = textId.value;
        Platos.Nombre = texto.value;
        insertar(Platos);
    };


    var MeteDatos = function() {
        /*insertar(Datos);
        /*Datos._id = '12';
         Datos.nombre = 'segundo';
         Datos.fecha=new Date().toISOString();
         insertar(Datos); 
         Datos._id = '13';
         Datos.nombre = 'tercero';
         Datos.fecha=new Date().toISOString();
         insertar(Datos);
         Datos._id = '14';
         Datos.nombre = ' cuarta';
         Datos.fecha=new Date().toISOString();
         insertar(Datos);/* */

    };


    init();


    BotInsertar.addEventListener('click', Meter, 'false');
    BotLeer.addEventListener('click', LeeDatos, 'false');


    //insertar(Receta);
    //Vista();
    //MeteDatos();
    // LeeDatos(1);
    //LeeDatos(4);
    //LeeDatos(2);
    //LeeDatos(3);

    //Busqueda(Datos);
    BusquedaVista();

}());
