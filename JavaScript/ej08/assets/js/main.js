window.onload = function() {

    var enlaces = document.getElementsByTagName("a");
    console.log("Numero de enlaces " + enlaces.length);

    enlaces = document.querySelectorAll("a");
    console.log("Numero de enlaces " + enlaces.length);

    //enlaces = document.querySelectorAll('');
    //console.log(enlace);
    //console.log (enlaces[enlaces.lenght-2].href);

    enlaces = document.querySelectorAll('a[href="http://prueba"]');
    console.log("Numero de enlaces " + enlaces.length);


     var count;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces.item(i).href === "http://prueba") {
            count++;
        }
    }
   
    console.log("Numero de enlaces " + count);



    var parrafos = document.querySelectorAll('p');
    if (parrafos.lenght > 2) {
    	enlaces=parrafos[2].querySelectorAll('a');
    	console.log("Numero de enlaces "+ enlaces.length);
    }

//otra forma

	parrafos=document.querySelectorAll('body > p:nth-child(3) a');
	console.log	('Numero de enlaces en 3 parrafo '+ parrafos);

};
