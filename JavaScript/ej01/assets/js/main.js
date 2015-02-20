(function() {
    var validarDNI = function(NDNI) {

        if (!NDNI) {
            return false;
        }

        if (NDNI.length == 9) {
            Numeros = NDNI.substring(0, NDNI.length - 1);
            Numeros = parseInt(Numeros);
            letra = NDNI.substring(NDNI.length - 1);

            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

            resto = (Numeros % 23);

            if (letra == letras[resto]) {
                return true;
            } else {
                return false;
            }
        } else { /*no tiene 9 caracteres */
            return false;
        }



    };

    console.log(validarDNI("72686952Y") === true);
    console.log(validarDNI("726869525") === false);
    console.log(validarDNI("726d6952y") === false);
    console.log(validarDNI() === false);
})();
