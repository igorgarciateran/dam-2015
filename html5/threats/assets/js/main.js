(function() {

    var boton = document.getElementById('boton');
    var numero = document.getElementById('numero');
    var resultado = document.getElementById('resultado');



    var worker = new Worker('assets/js/treat.js');


    //console.log(boton);

    boton.addEventListener('click', function(e) {
        e.preventDefault();
        var numerox = numero.value;

        //var primes = get(numero);


        worker.postMessage(numerox);

    }, false);


    worker.addEventListener('message', function(e) {
        var primes = e.data;
        resultado.value = primes.join('  ');
    });


})();
