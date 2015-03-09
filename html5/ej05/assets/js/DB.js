var APP = APP || {};
APP.DB = (function() {
    //vamos a simular una base de datos
    var db,
        cfg = {
            name: 'Twittes.db',
            version: 2.0,
            descripcion: 'twitter database',
            size: 1 * 1024 * 1024
        };

    //devuelve una peticion de BD, no es la apertura
    var request = indexedDB.open(cfg.name, cfg.version);


    //como la apertura es asincrona, hacemos un callback
    // para que ejecute lo que le llama cuando este abierta la BD
    var init = function(success) {
        if (!db) {
            request.addEventListener('success', function(e) {
                console.log(cfg.name + 'OK');

                //guardamos en DB la base de datos
                db = e.target.result;
                success();
            });



            request.addEventListener('upgradeneeded', function(e) {
                //se ejecuta cuando no es la misma version 
                console.log('actualizando la BD');
                db = e.target.result;


                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });
                console.log(tweets);
            });

        } else {
            success();
        }
    };






    //como la apertura es asincrono, puede dar fallos. 
    //Que se este cargando cuando se hace el insert
    var insert = function(tweet) {
        init(function() {
            var transaccion = db.transaction(['tweets'], "readwrite");
            var store = transaccion.objectStore('tweets');

            var request = store.add(tweet);

        });
    };


    var get = function(id, success) {
        init(function() {
            var transaccion = db.transaction(['tweets'], "readonly");
            var store = transaccion.objectStore('tweets');

            //request es la peticion, no el objeto que devuelve
            var getRequest = store.get(id);
            //añadimos el lisener
            // para que se ejecute cuando tenga el resultado del get
            getRequest.addEventListener('success', function(e) {

                //console.log(e.target.result);
                success(e.target.result);

            });

        });
    };



    return {

        insert: insert,
        //getall: getAll
        get: get
    };

})();
