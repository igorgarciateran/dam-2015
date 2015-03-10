$(function() {
    "use strict";

    // Obtener los elementos del DOM

    var content = $('#content');
    var intro = document.getElementById('input');
    var estado = document.getElementById('status');
    var boton = document.getElementById('boton');

    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');


    var socketOpen = function(e) {
        console.log('Abierto');
        input.disabled = false;
        estado.innerHTML = 'introduce tu nick';
    };

    var socketClose = function(e) {
        console.log('Cerrado');
    };

    var socketError = function(e) {
        console.log('Error');
    };


    var handleMessage = function(e) {
        var json;

        try {
            json = JSON.parse(e.data);
        } catch (ex) {
            console.log('Error with json message. ', e.data);
        }

        switch (json.type) {

            case 'color':
                myColor = json.data;
                estado.innerHTML = myName;
                break;

            case 'message':
                addMessage(json.data.author, json.data.text, json.data.color, new Date(json.data.time));
                break;

            case 'history':
                for (var i = 0; i <= json.data.length - 1; i++) {
                    addMessage(json.data[i].author, json.data[i].text, json.data[i].color, new Date(json.data[i].time));
                }
                break;
        }

    };


    socket.addEventListener('open', socketOpen);
    socket.addEventListener('close', socketClose);
    socket.addEventListener('error', socketError);
    socket.addEventListener('message', handleMessage);


    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;


    /*    socket.onopen = function(e) {
            console.log("Welcome - status " + this.readyState);
            estado.innerHTML = "Introduce tu nick";
            intro.disabled = false;
        };


        socket.onclose = function(e) {
            console.log("Disconnected - status " + this.readyState);
            estado.innerHTML = "DESconectado";
            intro.disabled = true;
        };

        socket.onmessage = function(e) {
            console.log('mensaje: ' + e.data);
            var respuesta = JSON.parse(e.data);


            switch (respuesta.type) {

                case 'history':

                    for (var i = 0; i <= respuesta.data.length - 1; i++) {
                        addMessage(respuesta.data[i].author, respuesta.data[i].text, respuesta.data[i].color, new Date(respuesta.data[i].time));
                    }
                    break;

                case 'color':
                    //console.log(respuesta.data);
                    myColor = respuesta.data;
                    break;

                case 'message':
                    addMessage(respuesta.data[i].author, respuesta.data[i].text, respuesta.data[i].color, new Date(respuesta.data[i].time));
                    break;
            }
        };

    */

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (socket) {
        //console.log(socket);
        //return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;


    var enviarmensaje = function(socket, mensaje) {

        socket.send(mensaje);
        console.log('evento ejecutado: ' + mensaje);
    };




    input.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            var value = this.value;

            if (value) {
                if (!myName) {
                    myName = value;
                }
            }
            socket.send(value);
            input.value='';


        }
    }, false);

    boton.addEventListener('click', function() {
        //console.log(intro.value);
        socket.send(intro.value);
        intro.value = '';
    }, false);
    console.log('evento boton agregado');



    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }
});
