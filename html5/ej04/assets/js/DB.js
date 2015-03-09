var APP = APP || {};
APP.DB = (function() {
    //vamos a simular una base de datos
    var db,
        cfg = {
            name: 'Twitter.db',
            version: '1.0',
            descripcion: 'twitter database',
            size: 1 * 1024 * 1024
        };
    createTable = "create table if not exists Tweets (id text constraint pk_tweet primary key,text text ,autor text ,fecha integer );";


    try {
        db = openDatabase(cfg.name, cfg.version, cfg.descripcion, cfg.size);
    } catch (e) {
        //la version no coincide
        if (e.code == 11) {
            //movidon del guapo!!!
            db.changeversion();
        }

        console.log(e);
    }

    console.log(db);

    //tenemos una DB abierta 
    if (db) {
        var createesquema = function(tx) {
            tx.executeSql(createTable, [], function(tx, results) {
                console.log('Tabla tweet creada');
                console.log(results);
            }, function(tx, error) {
                console.log('DB error ' + error);
            });
        };

        db.transaction(createesquema);
    }


    var insert = function(tweet) {
        var sql = 'insert into tweets values (?,?,?,?)';
        //executesql (sql, parametros, funcion si mal)
        //si ok => 
        db.transaction(function(tx) {
            tx.executeSql(sql, [tweet.id, tweet.text, tweet.autor, tweet.fecha], function(tx, results) {
                console.log('ha insertado el tweet');
            }, function(tx, error) {
                console.log('Error :' + error);
            });

        });
    };


    var getAll = function(success) {
        db.transaction(function(tx) {
            var sql = "SELECT * FROM Tweets ORDER BY fecha";

            tx.executeSql(sql, [], function(tx, results) {
                console.log("recibo los Tweets " + results.rows.count);


                var arr = [];
                for (var i = results.row.length - 1; i >= 0; i--) {
                    console.log(results.rows.item(i));
                    arr.push(results.rows.item(i));
                }

                success(datos);
            }, function(tx, error) {
                console.log("error al recibir los tweets " + error);
            });
        });
    };



    return {

        insert: insert,
        getall: getAll
    };

})();
