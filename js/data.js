let urlHome = "https://elchinx.github.io/Chinxtest";

var url = {          
          // "sprite":"https://webchinx.000webhostapp.com/media/pj/chinxtest/base.png",
          "bg_bg": urlHome+"/media/box.jpg",
          "chinx_voice": urlHome+"/media/pj/chinx/voiceV.wav",
          "chinx_sprite":urlHome+"/media/pj/chinx/base.png",
          "sans_voice": urlHome+"/media/pj/chinx/sansV.wav",
          "win_bg":urlHome+"/media/win.png",
          "audio_fish": urlHome+"/media/audio/fish.mp3",
          "audio_flo":urlHome+"/media/audio/flo.mp3",
          "audio_grito":urlHome+"/media/audio/grito.ogg",
          "audio_hard":urlHome+"/media/audio/hard.mp3",
          "audio_loquendo1":urlHome+"/media/audio/loquendo1.mp3",
          "audio_loquendo2":urlHome+"/media/audio/loquendo2.mp3",
          "audio_loquendo3":urlHome+"/media/audio/loquendo3.mp3",
          "audio_loquendo4":urlHome+"/media/audio/loquendo4.mp3",
          "audio_megalovania":urlHome+"/media/audio/mega.mp3",
          "audio_test": urlHome+"/media/audio/test.mp3",
          "default_voice": urlHome+"/media/audio/voice.wav",
          "audio_zoey":urlHome+"/media/audio/zoey.mp3",
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
     "siNoSeDejaAlanharLeCaeUnVirusQueLeJakeaBienCabron":"Joel",                                //
     "moishinx":"Moises",                                                                      //
     "DoggadictoALosWesos":"Joven Riolu",
     "ZorritoQueSeAmaneceCada2DiasDiarios":"Joven Zorrito",
     "JovenCubitoRockeroHeavyMetal":"Joven Cubito",
     "ShinxGrandoteQuePareceLuxio":"Joven Shinx",
     "FranShinxCOAsociados":"Francis",
     // segunda test
     "Flamvliom":"Joven Flavio",
     "JOanJOtaro":"Joven Estrellita",
     "ShinxPoweaOfTheCukWorld":"Joven Shinx Patita Poderosa",
     "JaviElShinxMenorTodoUnProfesional":"Hermanito Shinx",
     // Im not Sure because No les hablo pero si se que son buenas personas
     "PopplioElSirenitoMilanesaCondenadoAUnFrascoDeBits":"Joven Sirenito",
     "SuperSerpientitaEcologica64":"Joven Antonimouz",
     "SebasEsUnDinosaurioQueViveEnLaMatrix":"Joven Dino",
     "DoggadictoAlDogChauYALosWesos":"Joven Absolito",
     "tripaloskiTodoMio":"Joven Pinshinx Comunista",
     "ComoQueLilyNoSeApellidaOwO":"Joven Lily",
}

var keys = {
     "name":urlGet("a"),
     "sans":url["sans_voice"],
     "chinx":url["chinx_voice"],
     "default":url["default_voice"]
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
     ["Si estas mirando esto por primera vez, significa que eres una persona muy importante","chinx/2",""],
     ["Si lo estas mirando por segunda vez, significa que gracias a tí tu opinion ayudo a mejorar","chinx/3"],
     ["Y tambien significa que sigues teniendo buenos gustos","chinx/4",""],
     // 
     ["Si los dialogos son muy lentos, solo toca la pantalla para que puedas saltear el dialogo tu mismo","chinx/2",""],
     ["puedes presionar el boton de arriba para controlar los dialogos","chinx/16",""],
     ["Si esta encendido, seran automaticos","chinx/3",""],
     ["Si esta apagado, se pausaran y podras continuar haciendo click en cualquier parte del escenario","chinx/4",""],
     ["o simplemente tocando la pantalla","chinx/3",""],
     ["Si se enciende solo es para no interrumpir una parte importante rapida","chinx/2",""],
     ["Pero no te preocupes, se detendra solo cuando acabe ese momento","chinx/3",""],
     ["Incluso si lo pusiste en automatico","chinx/2",""],
     ["Bueno, continuemos","chinx/4",""],
     // 
     ["Tal vez te preguntes ¿Que es toda esta wea?","chinx/3",""],
     ["Pues basicamente es una especie de Alfa,Beta o algo así","chinx/2",""],
     ["Estaba planeando hacer un directo por los 1000 likes a la pagina de El Chinx desde hace un mes","chinx/3",""],
     ["Aunque ya vamos a llegar a los 1100","chinx/2",""],
     ["pero no pude hacerlo por varios motivos","chinx/2",""],
     ["Principalmente por no tener a quien pueda acompañarme","chinx/3",""],
     ["Un momento","chinx/2",""],
     ["","chinx/8",""],
     ["Ya somos más de 1100","chinx/11",""],
     ["Entonces demonos prisa","chinx/28",""],
     ["Talvez pienses que esto es una clase de videojuego","chinx/2",""],
     ["Se que tiene pantalla de carga y dialogo a lo RPG","chinx/3",""],
     ["Pero era eso a hablar con la voz del creador","chinx/4",""],
     ["Esto es una prueba y necesitaba de tu opinion","chinx/2",""],
     ["Si piensas que no es una buena idea, que es muy complicado leer tan rapido, no hay problema con eso","chinx/4",""],
     ["Estaba haciendo otra cosas y esto me tomaba algo de tiempo pero me sirve","chinx/3",""],
     ["Me estarias haciendo un favor si crees que no es buena idea, solo si","chinx/4",""],
     ["Despues de esto ya podre volver a hacer garabatos","chinx/4",""],
     ["Vamos a volver a probar algunas funciones y ver si todo sale bien","chinx/3",""],
     ["Esta es una version revisada por unos amigos que me dieron su opinion","chinx/2",""],
     ["Antes no habia el boton de arriba, era mantener el click presionado unos segundos","chinx/4",""],
     ["hasta que me di cuenta que en los Telefonos no se puede","chinx/2",""],
     ["Pero despues de todo funcionó y les gustó","chinx/3",""],
     ["Que bueno que les gustara","chinx/3",""],
     ["Ahora quiero saber si tambien opinas lo mismo o crees que no es una buena idea","chinx/4",""],
     ["Una buena idea para un directo o una buena idea para otra cosa","chinx/3",""],
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
     ["y esta","chinx/14","control:repro=true,reproAuto=true,paget=550"],
     ["y esta","chinx/15","control:repro=true,reproAuto=true,paget=200"],
     ["y esta","chinx/16","control:repro=true,reproAuto=true,paget=100"],
     ["y por ultima","chinx/17","control:paget=1000,reproAuto=true,repro=true"],
     ["este","chinx/18","control:paget=500,reproAuto=true,repro=true"],
     ["Ahora vamos a cambiar de fondo","chinx/12","control:paget=950,reproAuto=false,repro=false"],
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
     ["","chinx/24","control:paget=950,speed=50;function:bg=4,musics=hard+stop"],
     ["Creo que es suficiente","chinx/25",""],
     ["¿que más sigue?","chinx/26","control:paget=950,reproAuto=false,repro=false"],
     ["ah! Ya recordé","chinx/12",""],
     ["aparecer y desaparecer","chinx/5","control:reproAuto=true,repro=true"],
     ["mira, magia","chinx/13","control:reproAuto=true,repro=true"],
     ["estoy","chinx/28",""],
     ["y ahora no estoy","chinx/27",""],
     ["BOOOOOAAAAAA!","chinx/29","function:musics=grito+play+false+0.2"],
     ["Soy tu vida adulta con MUCHAS Responsabilidades y Estres","chinx/30","function:musics=grito+stop"],
     ["Perdona, no resistí hacerlo","chinx/31",""],
     ["Continuemos","chinx/12","control:paget=950,reproAuto=false,repro=false"],
     ["Ahora es momento de ver los lados","chinx/5",""],
     ["Ahora estoy en el lado IZQUIERDO de tu pantalla","chinx/32",""],
     ["Debo probar si podré estar en el lado DERECHO","chinx/33",""],
     ["Ahora aquí estoy","chinx/34","control:reproAuto=true,repro=true"],
     ["y ahora aquí ","chinx/34","chinx:oRight=false,box=pj2"],
     ["Ahora volveré a mi lugar de inicio","chinx/34",""],
     ["Listo","chinx/34","chinx:oRight=true,box=pj1"],
     ["Ahora la dirección a la que estoy mirando","chinx/12","chinx:oRight=true"],
     ["Aquí es donde hubo muchos problemas pero el resultado valió la pena","chinx/17",""],
     ["Miro a la izquierda","chinx/35","chinx:oRight=false"],
     ["Luego a la derecha","chinx/35","chinx:oRight=true"],
     ["Izquierda","chinx/36","chinx:oRight=false"],
     ["Derecha","chinx/36","chinx:oRight=true"],
     ["Izquierda","chinx/36","chinx:oRight=false;control:btnNextAvailable=false,reproAuto=true,repro=true,paget=700"],
     ["","chinx/36","chinx:oRight=true;function:musics=fish+play+false+0.6;control:btnNextAvailable=false,repro=true,paget=700"],
     ["","chinx/36","chinx:oRight=false;control:btnNextAvailable=false,repro=true,paget=700"],
     ["","chinx/36","chinx:oRight=true;control:btnNextAvailable=false,repro=true,paget=700"],
     // BAILE BIEN PERRON
     ["","chinx/37","control:btnNextAvailable=false,repro=true,paget=7000;function:dance=chinx+oRight+false"],
     //  FIN DEL BAILE BIEN PERRON
     ["Ahora la siguiente prueba","chinx/5","chinx:oRight=true;control:btnNextAvailable=true,reproAuto=false,paget=950;function:musics=fish+stop,stopDance=a"],
     ["La de voz","chinx/12",""],
     ["realmente es un audio recortado de un grito","chinx/17",""],
     ["para que suene con cada letra que se escribe","chinx/14",""],
     ["Escucha","chinx/12","control:paget=950,reproAuto=true,repro=true"],
     ["","chinx/38",""],
     ["¿Quieres pasar un mal rato?","chinx/39","control:speed=70,paget=500,reproAuto=true,repro=true,voiceVolume=0.3,voice=%sans%;function:musics=megalovania+play+false+0.1"],
     ["mhhj!","chinx/40","control:voice=%default%;function:musics=megalovania+stop+false+0.3"],
     ["¿Vistes pasar aquel raton?","chinx/16","control:voice=%chinx%,voiceVolume=0.05"],
     // LA RAZÓN DE NO TENER VOZ
     ["Podria pedirle a amigos que me presten su voz","chinx/2","chinx:voice=%chinx%;control:speed=60,paget=950,reproAuto=false,repro=false"],
     ["De hecho, se quien puede prestarme su voz","chinx/3",""],
     ["Pero Zoey no tendria voz y no podria usar Loquendo","chinx/2",""],
     ["Imagina esto","chinx/2","control:paget=950,reproAuto=true,repro=true"],
     ["Hola amigos de Youtube, el día de hoy vamos a descargar winrar full version con su keygen serial y crack","chinx/2","control:voiceVolume=0;function:musics=loquendo1+play+false+0.2"],
     ["Primero vamos al link que les dejare en la descripción","chinx/2","control:voiceVolume=0;function:musics=loquendo2+play+false+0.2,musics=loquendo1+stop"],
     ["Yo no lo descargo porque ya lo tengo","chinx/2","control:voiceVolume=0;function:musics=loquendo3+play+false+0.2,musics=loquendo2+stop"],
     ["aaaaaaaaaaaaa xdxdxddd","chinx/2","control:voiceVolume=0,paget=2500;function:musics=loquendo4+play+false+0.2,musics=loquendo3+stop"],
     ["Debe ser el último","chinx/5","control:voiceVolume=0.1,paget=1000,reproAuto=false,repro=false;function:musics=loquendo4+stop"],
     ["ahhh!! Casi lo olvido!","chinx/41",""],
     ["la transparencia tambien","chinx/5",""],
     ["No me debes ver con un fondo blanco siempre","chinx/13","control:reproAuto=true,repro=true"],
     ["veamos que pasa si nos cambiamos a formato PNG","chinx/16","control:reproAuto=true,repro=true"],
     ["","chinx/42","control:reproAuto=true,repro=true,paget=550"],
     ["","chinx/43","control:reproAuto=true,repro=true"],
     ["!","chinx/44","control:reproAuto=true,repro=true"],
     ["Pero solo lo de afuera","chinx/45","control:reproAuto=true,repro=true,paget=1000"],
     ["","chinx/46","control:reproAuto=true,repro=true,paget=550"],
     ["","chinx/47","control:reproAuto=true,repro=true"],
     ["Shinx-niestro","chinx/48","control:paget=1000"],
     ["deberia agregar más cosa como que salga un cuadro de texto para elegir","chinx/49",""],
     ["tambien hacer que tu debas interactuar para seguir con el diálogo","chinx/50",""],
     ["Y el color y la ortografía cuando se pase todo a produSHIoNX","chinx/49",""],
     ["pero por ahora todo bien","chinx/49",""],
     ["deberia ser en algún otro lugar que no sea una web","chinx/48",""],
     ["Eso es todo y para terminar","chinx/51",""],
     ["muchas gracias por su ayuda","chinx/52",""],
     ["su opinión y datos de lo que sucediò durante su tiempo aquí es necesaria","chinx/53",""],
     ["nos vemos en la versión final","chinx/54","control:reproAuto=true,repro=true"],
     ["si es que logra salir por completo","chinx/55","control:reproAuto=true,repro=true"],
     ["","chinx/0","function:sleep=gracias"]
];
