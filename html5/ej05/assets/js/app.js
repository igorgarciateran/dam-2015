(function() {

    var tweet = {
        id: '11111',
        text: 'ajkfagfkjasg',
        autor: 'yo mismo',
        fecha: 'Mon Sep 24 03:23:32 +0000 2012'
    };

    //APP.DB.insert(tweet);

    APP.DB.get(tweet.id, function(t) {
        console.log(t);
    });
    //APP.DB.getall(success);


})();
