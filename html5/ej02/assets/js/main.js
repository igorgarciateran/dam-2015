window.onload = function() {

    var loaded = true;
    var player = document.getElementById('video');
    var open = document.getElementById("abrir");
    var pause = document.getElementById("pausa");
    var stop = document.getElementById("parar");
    var forward = document.getElementById("avanzar");
    var backward = document.getElementById("retroceder");
    var begin = document.getElementById("inicio");
    var finish = document.getElementById("fin");
    var progress = document.getElementById('progreso');
    var volume = document.getElementById("volumen");
    var playlist = document.querySelectorAll("#tracklist");


    var canplay = function(e) {
        //este evento se ejecuta muchas veces
        loaded = true;
        volume.value = player.volume * 100;
        progress.max = player.duration;
    };

    var playpause = function(e) {
        if (loaded) {
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        }
    };

    var timeupdate = function(e) {
        progreso.value = (player.currentTime * player.duration) / 100;
    };

    var update = function(e) {

    };

    var abrir = function(e) {
        console.log("abrir");
        if (loaded) {
            player.play();
        }
    };

    var pausa = function(e) {
        if (loaded) {
            player.pause();
        }
    };

    var parar = function(e) {
        if (loaded) {
            player.pause();
            player.duration = 0;
        }
    };

    var avanzar = function(e) {
        if (loaded) {
            player.currentTime = player.currentTime + 2;
        }
    };

    var retroceder = function(e) {
        if (loaded) {
            player.currentTime = player.currentTime - 2;
        }
    };

    var inicio = function(e) {
        if (loaded) {
            player.currentTime = 0;
        }
    };

    var fin = function(e) {
        if (loaded) {
            player.currentTime = player.duration;
        }
    };

    var completa = function(e) {
        if (loaded) {


        }
    };


    var volumen = function(e) {

        //video = document.getElementById('video');
        player.volume = volume.value / 100;
        //console.log("Barra:" + volume.value + " video:" + video.volume)
    };

    var progreso = function(e) {
        //console.log(this);
        //barra = document.getElementById('progreso');
        progress.value = player.currentTime;
        //console.log("Barra:" + this.value + " video:" + video.volume)
    };

    var changevideo = function(e) {
        var src = e.target.dataset.src;
        if (Modernizr.video.h264) {
            player.src = src + ".mp4";
        } else {
            player.src = src + ".webm";
        }

    };



    player.addEventListener('canplay', canplay, false);
    player.addEventListener('click', playpause, false);
    player.addEventListener('timeupdate', update, false);

    open.addEventListener('click', abrir, false);
    pause.addEventListener('click', pausa, false);
    stop.addEventListener('click', stop, false);
    forward.addEventListener('click', avanzar, false);
    backward.addEventListener('click', retroceder, false);
    begin.addEventListener('click', inicio, false);
    finish.addEventListener('click', fin, false);

    progress.addEventListener('click', progreso, false);
    volume.addEventListener('click', volumen, false);
    playlist.addEventListener('click', changevideo, false);


};
