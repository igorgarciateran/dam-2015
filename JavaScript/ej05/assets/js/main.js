(function() {

    var mayusculas = function(letras) {

        if (typeof(letras) =='string'){
              var tmp = letras.trim().toUpperCase().replace(/\s/g,'').split('').reverse().join('');

            return ( tmp === (letras.trim().toUpperCase().replace(/\s/g,'')));
                 }
        } else {
            return false;
        }
      
    console.log(mayusculas("    radar  ") );
    console.log(mayusculas("AL KALDF SHJ KLH"));
    console.log(mayusculas("la ruta nos aporto otro paso natural"));
    console.log(mayusculas());



})();
