$(function() {
    //es como window onload

    var $provincia = $('#provinciasx'),
        $municipio = $('#Municipiosx');



    var meterEnLista = function(lista, datos) {
        var options = [];

        for (var cp in datos) {
            options.push(new Option(datos[cp], cp));
        }
        lista.append(options);
    };



    var PonProvincias = function(provincias) {
        meterEnLista($provincia, provincias);
    };



    var peticionProvincia = function() {

        $.getJSON('../servidor/cargaProvinciasJSON.php', {}, function(provincias) {
            //los datos que devuelve, el stado, y el objeto que hace la peticion httprequest
            PonProvincias(provincias);
        });

    };




    var peticionMunicipios = function(provincia) {

        $.ajax('../servidor/cargaMunicipiosJSON.php', {
            method: 'POST',
            data: {
                provincia: provincia,
                //el servidor espera un campo "provincia" con un valor
            },
            dataType: 'json',

            success: function(municipios) {
                //console.log(provincia);
                //console.log(municipios);
                $municipio.children().remove();
                meterEnLista($municipio, municipios);
            }

        });
    };




    peticionProvincia();

    $provincia.on('click', function(e) {
        //console.log($provincia.val());
        peticionMunicipios($provincia.val());
    });



});
