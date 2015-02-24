(function() {



    var s1 = new App.Model.Shape();
    s1.move(5, 5);
    console.log(s1);

    var s2 = new App.Model.Shape(10, 10);
    s2.move(10, 10);
    console.log(s2);



    //s2.sety(0);
    //console.log(s2);


    var redondo = new App.Model.Circulo(80, 80, 40);
    console.log(redondo);



    var rectangulo = new App.Model.Rectangulo(150, 150, 10, 50);
    console.log(rectangulo);

    //rectangulo.setAlto(40);
    console.log(rectangulo);


// framework para hacer clases backbone

})();
