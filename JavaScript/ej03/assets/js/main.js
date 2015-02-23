(function() {
    var par = function(numero) {

        if (typeof numero ==='number') {
            return ((numero %2)=== 0 );
            
        } else {
            return NaN;
        }

    };

    console.log(par(1) );
    console.log(par(2) );
    console.log(par(3));
    console.log(par());
})();
