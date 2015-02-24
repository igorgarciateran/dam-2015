(function() {
    var validaremail = function(email) {

        var Validador="/^.@([0-9.\-A-Za-z]+)$/";

        return (email.test(Validador));
    };

    console.log(validaremail("igor@gmail.com.com")===false );
    console.log(validaremail("igor@gmail.com")=== true );
    console.log(validaremail("ig.or@gmail.com")===true );
    console.log(validaremail() ===false);
})();
