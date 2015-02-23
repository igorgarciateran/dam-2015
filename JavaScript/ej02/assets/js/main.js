(function() {
    var factorial = function(numero) {

        var total=1;
        var i=numero-1;
        while (i>=0) {
            total=numero * factorial(numero-1);
        
            i=i-1;
        }
        return total;
};
    console.log(factorial("0"));
    console.log(factorial("5"));
    console.log(factorial("6"));
    console.log(factorial(7) );
    
})();
