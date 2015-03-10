$(function() {
    //seleccionar todos los div clase module
    var $divs = $('div.module');
    //seleccionar el tercer li de mylist
    var $li = $('#myList li:nth-child(3)');
    //seleccionar los li de mylist
    var $lis = $('#myList > li');

    $lis.on('click', function(e) {
        console.log(e);
        console.log(this);
    });

    console.log($lis.eq(2));

    //selecciono mylist
    var $ul = $('#myList');
    //selecciono el tercer li =>lo mismo pero con jquery
    console.log($ul.find('li').eq(2));


    //seleccionar el elemento que esta encima del input
    var $input = $('input[name="q"]');
    var $label = $('label[for="' + $input.attr('name') + '"]');
    console.log($label);

    //sellecciona todos los elementos que estan ocultos
    var $hidden = $(':hidden');
    //tienen una funccion especifica each, para recorrer los elementos 
    $hidden.each(function(idx, elem) {
        console.log(elem);
        //poniendo el $ lo convierto en el elemento del html.Con el show lo muestra
        $(elem).show();
    });

    //seleccionar todas las imagenes y mostrar el atrr alt
    var $imagenes = $('img');
    $imagenes.each(function(idx, elem) {
        console.log(elem.alt);
    });

    //seleccionar el elemento input, subir hasta el formulario y añadir una clase  
    //closets= el mas cercano hacia arriba
    $input.closest('form').addClass('form');
    //quitale la clase
    $input.closest('form').removeClass('form');
    //si tiene se la quita, si no la tiene se la pone
    //$input.closest('form').toogleClass('form');



    //seleccionar el item que tiene la clase current, y remover esa clase
    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current');



    var $submit = $('#specials select').closest('ul').find('input[type="submit"]');



    $('#slideshow li').first().addClass('current').siblings().addClass('disabled');

    //manipulacion del DOM


    //agregar 5 elementos
    for (var i = 0; i <= 4; i++) {
        $ul.append('<li>Element n</li>');
    }
    //cada vez que se agrega un elemento se repinta toda la pagina. Mejor hacer un array y agregarlo una sola vez

    var lis = [];
    for (i = 0; i < 5; i++) {
        lis.push('<li>Element n</li>');
    }
    $ul.append(lis.join(''));

    //eliminar los impares
    $ul.find('li:odd').remove();


    //crear nuevos 
    $li = $('<li>', {
        class: 'current',
        text: 'Node list',
        id: 'myli'
    });
    //se puede añadir de las 2 maneras
    $ul.append($li);
    $li.appendTo($ul);

    //añadir eventos
    $ul.on('click', 'li', function(e) {
        console.log(e);
        console.log(this);
    });


    //otra forma
    //$ul.click()





});
