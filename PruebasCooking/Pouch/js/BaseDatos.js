var baseDatos= {

 	 db:"",
     nombre : 'pruebax13',

    init:function init(){
           if (this.db === "") {
            this.db = new PouchDB(this.nombre);
            console.log(this.db);
              }},



 //inserta en la BD lo que sea
     insertar: function inserta (Dato) {
        console.log(Dato);
         console.log(this.db);
        this.db.post(Dato, function(err, result) {
            if (!err) {
                console.log('Successfully posted :' + Dato.nombre);
                console.log(Dato);
            } else {
                console.log(err + '   ' + Dato.nombre);
            }
        },function (){
          console.log("algo");
        });

    },


insertanuevo:function insertax (Dato){
 this.db.put(Dato).then(function (response) {
  console.log("insertado");
}).catch(function (err) {
  console.log(err);
});
},



insertarOtro:function inser(Dato){
    this.db.put(Dato);
}





















	
};