$(function() {
    //es como window onload

    var $ticker = $('#ticker'),
        $detener = $('#detener');


    var peticionAjax = function() {

        $.ajax('../servidor/generaContenidos.php', {
            data: {
                user: 'arkaitz',
                pass: '1234'
            },
            method: 'POST',
            success: function(data, status, jqXHR) {
                //los datos que devuelve, el stado, y el objeto que hace la peticion httprequest
                $ticker.text(data);

            }
        });



        //equivalente seria
        // $.get('../servidor/generaContenidos.php', null,)

    };




    var interval = setInterval(peticionAjax, 1000);

    $detener.on('click', function(e) {
        clearInterval(interval);
    });

});
