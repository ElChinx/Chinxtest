let urlHome = "https://elchinx.github.io/Chinxtest";

var url = {          
          // "sprite":"https://webchinx.000webhostapp.com/media/pj/chinxtest/base.png",
          "chinx_voice": urlHome+"/media/pj/chinx/voice.wav",
          "chinx_sprite":"/media/pj/chinx/base.png",
          "sans_voice": "/media/pj/chinx/sans.wav",
          "win_bg":"/media/win.png",
          "audio_fish": urlHome+"/media/audio/fish.mp3",
          "audio_flo":"/media/audio/flo.mp3",
          "audio_grito":"/media/audio/grito.ogg",
          "audio_hard":"/media/audio/hard.mp3",
          "audio_loquendo1":"/media/audio/loquendo1.mp3",
          "audio_loquendo2":"/media/audio/loquendo2.mp3",
          "audio_loquendo3":"/media/audio/loquendo3.mp3",
          "audio_loquendo4":"/media/audio/loquendo4.mp3",
          "audio_megalovania":"/media/audio/mega.mp3",
          "audio_test": urlHome+"/media/audio/test.mp3",
          "default_voice": urlHome+"/media/audio/voice.wav",
          "audio_zoey":"/media/audio/zoey.mp3",
};

var control = {
     "box":"caja",              // id de la caja de texto por defecto
     "speed":50,                // velocidad de escritura por defecto
     "history":"historyTest",       // historia por defecto
     "action":undefined,
     "reproAuto":true,
     "btnNext":"protector",
     "btnNextAvailable":true,
     "state":"stop",          // Estado del Reproductor
     "repro":false,             // si se está reproduciendo una historia
     "noInterrupt":false,       // Valor para evitar ser interrumpido
     "page":0,                  // Pagina actual
     "paget":1500,              // TIEMPO DE ESPERA
     "voice":url["default_voice"],
     "trackv":undefined,
     "voiceDefault":false,
     "voiceVolume":0.05,
     "voiceActor":undefined,
};  

// SOUNDS 

var sounds = {
     "music":{
          "fish":{
               "src":url["audio_fish"],
               "track":undefined
          },
          "flo":{
               "src":url["audio_flo"],
               "track":undefined
          },
          "grito":{
               "src":url["audio_grito"],
               "track":undefined
          },
          "hard":{
               "src":url["audio_hard"],
               "track":undefined
          },
          "loquendo1":{
               "src":url["audio_loquendo1"],
               "track":undefined
          },
          "loquendo2":{
               "src":url["audio_loquendo2"],
               "track":undefined
          },
          "loquendo3":{
               "src":url["audio_loquendo3"],
               "track":undefined
          },
          "loquendo4":{
               "src":url["audio_loquendo4"],
               "track":undefined
          },
          "megalovania":{
               "src":url["audio_megalovania"],
               "track":undefined
          },
          "test":{
               "src":url["audio_test"],
               "track":undefined
          },
          "zoey":{
               "src":url["audio_test"],
               "track":undefined
          }
     },
     "loop":{

     }
}

// CHARACTERS

var talking = {};

var pjs = {
     "chinx":{
          "sprite":url["chinx_sprite"],
          "voice":url["chinx_voice"],
          "track":undefined,
          "size":56,
          "box":"pj1",
          "oRight":true
     },
     // "zoey":{
     //      "sprite":"/media/pj/zoeytest/base.png",
     //      "voice":"/media/pj/zoeytest/voice.wav",
     //      "track":undefined,
     //      "size":8,
     //      "box":"pj2",
     //      "oRight":false
     // }
};

let cdf = {
     "abc":"Lucas",                                                                            //
     "siNoSeDejaAlañarLeCaeUnVirusQueLeJakeaBienCabron":"Joel",                                //
     "moishinx":"Moises",                                                                      //
     "DoggadictoALosWesos":"Joven Riolu",
     "ZorritoQueSeAmaneceCada2DiasDiarios":"Joven Zorrito",
     "JovenCubitoRockeroHeavyMetal":"Joven Cubito",
     "ShinxGrandoteQuePareceLuxio":"Joven Shinx",
     "FranShinxCOAsociados":"Francis"

}

var keys = {
     "name":urlGet("a"),

};

var test = 
[
     ['HOLA','chinx/1','chinx:oRight=true,box=pj1;function:setActor=zoey+1'],
     ['¿COMO ESTAN?','chinx/2','chinx:oRight=false,box=pj2;control:speed=25,paget=1000'],
     ['Espero que estes muy bien en este bonito dia','chinx/1',''],
     [' ','chinx/1',''],
     [' ','chinx/2','function:ctm=callate+ctm'],
     ['te lo suplicoooooo','chinx/3',''],
     ['RESPONDE PLSsssssssssssssss','chinx/4','function:sleep=on']
];

var historyTest = 
[
     ["Hola %name%","chinx/1","function:musics=flo+play+true+0.4"],
     ["Si estas mirando esto, significa que eres una persona muy importante","chinx/2",""],
     ["Y tambien significa que tienes buenos gustos","chinx/4",""],
     // 
     ["Si los dialogos son muy rapidos, solo toca la pantalla para que puedas saltear el dialogo tu mismo","chinx/2",""],
     ["o manten presionado un momento la pantalla para cambiarlo a automatico","chinx/3",""],
     // 
     ["Tal vez te preguntes ¿Que es toda esta wea?","chinx/3",""],
     ["Pues basicamente es una especie de Alfa,Beta o algo así","chinx/2",""],
     ["Estaba planeando hacer un directo por los 1000 likes a la pagina de El Chinx desde hace un mes","chinx/3",""],
     ["Aunque ya vamos a llegar a los 1100","chinx/2",""],
     ["pero no pude hacerlo por varios motivos","chinx/2",""],
     ["Principalmente por no tener a quien pueda acompañarme","chinx/3",""],
     ["Talvez pienses que esto es una clase de videojuego","chinx/2",""],
     ["Se que tiene pantalla de carga y dialogo a lo RPG","chinx/3",""],
     ["Pero era eso a hablar con la voz del creador","chinx/4",""],
     ["Esto es una prueba y necesitaba de tu opinion","chinx/2",""],
     ["Si piensas que no es una buena idea, que es muy complicado leer tan rapido, no hay problema con eso","chinx/4",""],
     ["Estaba haciendo otra cosas y esto me tomaba algo de tiempo pero me sirve","chinx/3",""],
     ["Me estarias haciendo un favor si crees que no es buena idea, solo si","chinx/4",""],
     ["Despues de esto ya podre volver a hacer garabatos","chinx/4",""],
     ["Vamos a probar algunas funciones y ver si todo sale bien","chinx/3",""],
     ["Si tienes algun problema, se ve mál, desincronizado. Porfavor, avisame y explicame en que momento pasó","chinx/3",""],
     ["¿Entendido?","chinx/4","control:paget=1500"],
     ["Bien","chinx/3","control:paget=1000"],
     ["Primero vamos a ver la velocidad de habla","chinx/5",""],
     ["¡Quiten esa musica de fondo!","chinx/19","control:reproAuto=true,repro=true"],
     ["","chinx/20","function:musics=flo+stop+true+0.4;control:reproAuto=true,repro=true"],
     ["Ahora si, continuemos","chinx/4","control:reproAuto=true,repro=true"],
     ["Se está mostrando un diálogo en texto en una caja con bordes blancos y fondo oscuro","chinx/6",""],
     ["En la parte de abajo","chinx/5","control:reproAuto=true,repro=true"],
     ["","chinx/7",""],
     ["","chinx/8",""],
     ["Supuestamente cuando uno habla","chinx/5",""],
     ["","chinx/7","control:paget=400,reproAuto=true,repro=true"],
     ["","chinx/8",""],
     ["","chinx/9","control:paget=1000"],
     ["","chinx/10","control:paget=1000"],
     ["Bueno no importa","chinx/5",""],
     ["Se probara velocidad de promnium","chinx/6","control:reproAuto=true,repro=true"],
     ["promium","chinx/11","control:speed=100"],
     ["pronium","chinx/11","control:speed=150,paget=200"],
     ["PROnium","chinx/11","control:speed=100"],
     ["proNUN","chinx/11","control:speed=70"],
     ["proMUNi","chinx/11","control:speed=30"],
     ["primiun","chinx/11","control:speed=70"],
     ["PROmiun","chinx/11",""],
     ["pronium","chinx/11",""],
     ["de PRONUNCIACIÓN","chinx/12","control:speed=50,paget=1000"],
     ["a una velocidad muy rapida","chinx/5","control:reproAuto=true,repro=true"],
     ["muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy","chinx/6","control:speed=10,paget=10"],
     ["muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy ","chinx/6","control:speed=5"],
     ["muy muy muy muy muy muy muy muy muy muy muy pero que muy ...","chinx/5","control:paget=2100"],
     ["R A P I D O","chinx/6","control:speed=100"],
     ["ahora se probará el tiempo de espera","chinx/5","control:speed=50,reproAuto=true,repro=true"],
     ["Que es el tiempo de espera?","chinx/17","control:paget=1500,reproAuto=true,repro=true"],
     ["","chinx/10","control:paget=1000"],
     ["aquí dice que es el tiempo que se tarda en iniciar la siguiente línea de diálogo","chinx/5","control:paget=1000"],
     ["como está","chinx/13","control:paget=1000,reproAuto=true,repro=true"],
     ["y esta","chinx/14","control:btnNextAvailable=false,reproAuto=true,paget=550"],
     ["y esta","chinx/15","control:paget=200,btnNextAvailable=false,reproAuto=true"],
     ["y esta","chinx/16","control:paget=100,btnNextAvailable=false,reproAuto=true"],
     ["y esta","chinx/13","control:reproAuto=true,repro=true,btnNextAvailable=false,reproAuto=true"],
     ["y esta","chinx/14","control:reproAuto=true,repro=true,btnNextAvailable=false,reproAuto=true"],
     ["y esta","chinx/15","control:reproAuto=true,repro=true,btnNextAvailable=false,reproAuto=true"],
     ["y esta","chinx/16","control:reproAuto=true,repro=true,btnNextAvailable=false,reproAuto=true"],
     ["y esta","chinx/13","control:reproAuto=true,repro=true,btnNextAvailable=false,reproAuto=true"],
     ["y por ultima","chinx/17","control:paget=1000,reproAuto=true,repro=true,btnNextAvailable=false,reproAuto=true"],
     ["este","chinx/18","control:paget=500,reproAuto=true,repro=true,btnNextAvailable=false,reproAuto=true"],
     ["Ahora vamos a cambiar de fondo","chinx/12",""],
     ["Como solo es prueba, vamos a cambiar los fondos de prueba","chinx/5",""],
     ["muestren el fondo 2","chinx/19","control:reproAuto=true,repro=true"],
     ["","chinx/20",""],
     ["","chinx/20","function:bg=1;control:reproAuto=true,repro=true"],
     ["Perfecto","chinx/21",""],
     ["el siguiente, fondo 3","chinx/19","control:reproAuto=true,repro=true"],
     ["","chinx/20",""],
     ["","chinx/20","function:bg=2"],
     ["Un momento","chinx/20","control:reproAuto=true,repro=true"],
     ["Ese es el 4, falta el fondo 3","chinx/21","control:reproAuto=true,repro=true"],
     ["pongan el fondo fondo 3","chinx/19","control:reproAuto=true,repro=true"],
     ["","chinx/20","control:reproAuto=true,repro=true"],
     ["","chinx/20","function:musics=hard+play+false+0.5,bg=3;control:paget=500,reproAuto=true,repro=true"],
     ["","chinx/22","control:reproAuto=true,repro=true"],
     ["REGRESA! REGRESA!","chinx/23","control:paget=1000,speed=50"],
     ["","chinx/24","control:paget=700,"],
     ["","chinx/24","control:paget=800,speed=50;function:bg=0,musics=hard+stop"],
     ["Creo que es suficiente","chinx/25",""],
     ["¿que más sigue?","chinx/26",""],
     ["ah! Ya recordé","chinx/12",""],
     ["aparecer y desaparecer","chinx/5","control:reproAuto=true,repro=true"],
     ["mira, magia","chinx/13","control:reproAuto=true,repro=true"],
     ["estoy","chinx/28",""],
     ["y ahora no estoy","chinx/27",""],
     ["BOOOOOAAAAAA!","chinx/29","function:musics=grito+play+false+0.2"],
     ["Soy tu vida adulta con MUCHAS Responsabilidades y Estres","chinx/30","function:musics=grito+stop"],
     ["Perdona, no resistí hacerlo","chinx/31",""],
     ["Continuemos","chinx/12",""],
     ["Ahora es momento de ver los lados","chinx/5",""],
     ["Ahora estoy en el lado IZQUIERDO de tu pantalla","chinx/32",""],
     ["Debo probar si podré estar en el lado DERECHO","chinx/33",""],
     ["Ahora aquí estoy","chinx/34","control:reproAuto=true,repro=true"],
     ["y ahora aquí ","chinx/34","chinx:oRight=false,box=pj2"],
     ["Ahora volveré a mi lugar de inicio","chinx/34",""],
     ["Ya","chinx/34","chinx:oRight=true,box=pj1"],
     ["Ahora la dirección a la que estoy mirando","chinx/12","chinx:oRight=true"],
     ["Miro a la izquierda","chinx/35","chinx:oRight=false"],
     ["Luego a la derecha","chinx/35","chinx:oRight=true"],
     ["Izquierda","chinx/36","chinx:oRight=false"],
     ["Derecha","chinx/36","chinx:oRight=true"],
     ["Izquierda","chinx/36","chinx:oRight=false"],
     ["","chinx/36","chinx:oRight=true;function:musics=fish+play+true+0.6;control:btnNextAvailable=false,reproAuto=true,paget=700"],
     ["","chinx/36","chinx:oRight=false"],
     ["","chinx/36","chinx:oRight=true"],
     ["","chinx/36","chinx:oRight=false"],
     // BAILE BIEN PERRON
     ["","chinx/37","control:paget=7000;function:dance=chinx+oRight+false"],
     //  FIN DEL BAILE BIEN PERRON
     ["Ahora la siguiente prueba","chinx/5","chinx:oRight=true;control:btnNextAvailable=true,reproAuto=true,paget=800;function:musics=fish+stop,stopDance=a"],
     ["La de voz","chinx/12","control:"],
     ["realmente es un audio recortado de un grito","chinx/17",""],
     ["para que suene con cada letra que se escribe","chinx/14",""],
     ["Escucha","chinx/12",""],
     ["","chinx/38",""],
     ["Quieres pasar un mal rato?","chinx/39","control:voice=/media/pj/chinx/sans.wav;function:musics=megalovania+play+false+0.2"],
     ["mhhj!","chinx/40","control:voice=/media/audio/voice.wav;function:musics=megalovania+stop+false+0.3"],
     ["Que al raton nos vemos","chinx/16","control:voice=/media/pj/chinx/voice.wav"],

     // LA RAZÓN DE NO TENER VOZ
     ["Podria pedirle a amigos que me presten su voz","chinx/2","chinx:voice=/Chinxtest/media/audio/voice.wav"],
     ["De hecho, se quien puede prestarme su voz","chinx/3",""],
     ["Pero Zoey no tendria voz y no podria usar Loquendo","chinx/2",""],
     ["Imagina esto","chinx/2",""],
     ["Hola amigos de Youtube, el día de hoy vamos a descargar winrar full version con su keygen serial y crack","chinx/2","control:voiceVolume=0;function:musics=loquendo1+play+false+0.2"],
     ["Primero vamos al link que les dejare en la descripción","chinx/2","control:voiceVolume=0;function:musics=loquendo2+play+false+0.2,musics=loquendo1+stop"],
     ["Yo no lo descargo porque ya lo tengo","chinx/2","control:voiceVolume=0;function:musics=loquendo3+play+false+0.2,musics=loquendo2+stop"],
     ["aaaaaaaaaaaaa xdxdxddd","chinx/2","control:voiceVolume=0,paget=2500;function:musics=loquendo4+play+false+0.2,musics=loquendo3+stop"],
     ["Debe ser el último","chinx/5","control:voiceVolume=0.1,paget=850;function:musics=loquendo4+stop"],
     ["ahhh!! Casi lo olvido!","chinx/41",""],
     ["la transparencia tambien","chinx/5",""],
     ["No me debes ver con un fondo blanco siempre","chinx/13","control:reproAuto=true,repro=true"],
     ["veamos que pasa si nos cambiamos a formato PNG","chinx/16",""],
     ["","chinx/42",""],
     ["","chinx/43",""],
     ["!","chinx/44",""],
     ["Pero solo lo de afuera","chinx/45",""],
     ["","chinx/46",""],
     ["","chinx/47",""],
     ["Shinx-niestro","chinx/48",""],
     ["deberia agregar más cosa como que salga un cuadro de texto para elegi","chinx/49",""],
     ["tambien hacer que tu debas interactuar para seguir con el diálogo","chinx/50",""],
     ["por ahora todo bien","chinx/49",""],
     ["deberia ser en algún otro lugar que no sea una web","chinx/48",""],
     ["Eso es todo y para terminar","chinx/51",""],
     ["muchas gracias por su ayuda","chinx/52",""],
     ["si opinión y datos de lo que sucediò durante su tiempo aquí es necesaria","chinx/53",""],
     ["nos vemos en la versión final","chinx/54",""],
     ["si es que logra salir","chinx/55",""],
     ["","chinx/0","function:sleep=gracias"]
];
