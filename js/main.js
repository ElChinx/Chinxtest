function ppp(){


     
     var music = new Audio("https://webchinx.000webhostapp.com/media/audio/fish.mp3");
     document.getElementById("progre").innerText = "Cargando...";
     var isLoaded = music.complete && music.naturalHeight !== 0;
     alert(isLoaded);
     document.getElementById("progre").style.width = "100%";
     music.play();
}

var urlweb = {
     "default":{
          "voice":"media/audio/voice.wav"
     },
     "chinx":{
          "sprite":"/media/pj/chinxtest/base.png",
          "voice":"/media/pj/chinxtest/voice.wav"
     },
     "music":{
          "test":"/media/audio/test.mp3",
          "fish":"/media/audio/fish.mp3"
     }
};

var urlall = {
     "default":{
          "voice":"https://webchinx.000webhostapp.com/media/audio/voice.wav"
     },
     "chinx":{
          // "sprite":"https://webchinx.000webhostapp.com/media/pj/chinxtest/base.png",
          "voice":"https://webchinx.000webhostapp.com/media/pj/chinxtest/voice.wav"
     },
     "music":{
          "test":"https://webchinx.000webhostapp.com/media/audio/test.mp3",
          "fish":"https://webchinx.000webhostapp.com/media/audio/fish.mp3"
     }
};


var url = {
          "default_voice":"https://webchinx.000webhostapp.com/media/audio/voice.wav",
          // "sprite":"https://webchinx.000webhostapp.com/media/pj/chinxtest/base.png",
          "chinx_voice":"https://webchinx.000webhostapp.com/media/pj/chinxtest/voice.wav",
          "audio_test":"https://webchinx.000webhostapp.com/media/audio/test.mp3",
          "audio_fish":"https://webchinx.000webhostapp.com/media/audio/fish.mp3"
     
};

var muss = {
     0:undefined,
     1:undefined,
     2:undefined,
     3:undefined
};
// let afk = undefined;
let cn;
function lol(){
     var por = 0;
     var pol = 0;
     var tot = contar();
     Object.entries(url).forEach(f => {
          console.log(f[1]);
          muss[pol] = new Audio(f[1]);
          muss[pol].muted = true;
          muss[pol].play();
          pol++;
          cn = setInterval(() => {
              if(muss[por].played == true){
               pol++;
               clearInterval(cn);
              }
          }, 1000);
     });
}

function contar() {
     let c = 0
     Object.entries(url).forEach(e => {
          Object.entries(e).forEach(f=> {
               c++;
          });
     });
     return c;
}


var control = {
     "box":"caja",              // id de la caja de texto por defecto
     "speed":50,                // velocidad de escritura por defecto
     "history":"historyTest",       // historia por defecto
     "action":undefined,
     "state":"stop",          // Estado del Reproductor
     "repro":false,             // si se está reproduciendo una historia
     "noInterrupt":false,       // Valor para evitar ser interrumpido
     "page":0,                  // Pagina actual
     "paget":800,              // TIEMPO DE ESPERA
     "voice":url["default"]["voice"],
     "trackv":undefined,
     "voiceDefault":false,
     "voiceVolume":0.1,
     "voiceActor":undefined,
     // "music":{
     //      "src":"",
     //      "track":undefined,
     //      "loop":undefined,
     //      "play":function(l = false) {
     //           // control.music.track.play();
     //           this.track.play();
     //           if(l){
     //                this.loop = setInterval(() => {
     //                     if(this.track.currentTime > this.track.duration)
     //                     console.log("repetir");
     //                     this.track.currentTime = 0;
     //                }, this.track.duration*1000);
     //           }else{
     //                clearInterval(this.loop);
     //           }
     //      },
     //      "changeVolumen":function(v){
     //           this.track.volume = v/10;
     //      }
          
     // }
};   

// function music(t){
//      control["music"] = new Audio("/media/audio/"+t);
//      control.music.play();
// }

var sound = {
     "theme":{
          "test":{
               "src":url["music"]["test"],
               "track":undefined
          },
          "fish":{
               "src":url["music"]["fish"],
               "track":undefined
          }
     },
     "effect":{

     }
}

function theme(t){
     // control["music"] = new Audio(sound["theme"][t].src);
     sound["theme"][t].track.play();
     control.music.play();
}

var talking = {};

var pjs = {
     "chinx":{
          "sprite":url["chinx"]["sprite"],
          "voice":url["chinx"]["voice"],
          "track":undefined,
          "size":55,
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

// Funciones BASICAS

//   W R I T E 

function write(word,place,speed,voice){
     if(control.noInterrupt && talking[control.box] != undefined){
          //true                   true
     }else{
          let s = speed || control.speed;
          let l = place || control.box;
          // try {
          //      console.log("voice : "+voice);
          //      console.log("control.voice : "+control.voice);
          //      console.log(control.voice == undefined);
          //      console.log("control.voiceDefault : "+control.voiceDefault);
          //      console.log("pjs[control.voiceActor].voice : "+pjs[control.voiceActor].voice);
          //      let v = voice || (control.voiceActor == undefined) ? control.voice : pjs[control.voiceActor].voice;
          // } catch (error) {
                let v = voice || control.voice;
          // }
          if(control.voiceActor !== undefined && !control.voiceDefault){
               v = pjs[control.voiceActor].voice;
          }
          var speak = new Audio(v);
          speak.volume = control.voiceVolume;
          let box = document.getElementById(l);
          if(talking[l] !== undefined){
               // Interrupted
               clearInterval(talking[l+"t"]);
               box.textContent = word;
               delete talking[l+"t"];
               delete talking[l];
               if(control.repro){
                    endWriteR();
               }
          //    ++control.page;
               endWrite();
               return 0;
          }else{
               talking[l+"t"] = null;
               talking[l] = true;
               box.textContent = '';
          }
          let i = 0;
          let txt = '';
          let words = word.split('');
          talking[l+"t"] = setInterval(() => {
               if(control.state == "play"){
                    if(box.textContent == txt && words[i] !== undefined && talking[l] == true ){
                         // Writing
                         txt += words[i];
                         box.textContent += words[i];
                         // S P E A K
                              speak.currentTime = 0;
                              speak.play();
                         // S P E A K
                    }else if(box.textContent == word){
                         // Finished writing
                         talking[l] = false;
                         clearInterval(talking[l+"t"]);
                         delete talking[l+"t"];
                         delete talking[l];
                         //   control.noInterrupt = false;
                         if(control.repro){
                              // next;
                              endWriteR();
                         }
                         //   ++control.page;
                         endWrite();
                    }
                    i++;
               }
          },s);
     }
}

// A C T O R 

function actor(t){
     let actors = t.split(";");
     actors.forEach(e => {
          let actor = e.split("/");
          let a = actor[0];  
          let side = document.getElementById(pjs[a].box);
          side.style.backgroundImage = "url("+pjs[a].sprite+")";
          side.style.backgroundSize = (pjs[a].size * 100) + "%";
          if(actor[1] == "0" || actor[1] == ""){
               side.style.display = "none";
          }else{
               side.style.display = "block";
               side.style.backgroundPosition = ((actor[1]-1) * -100)+"%";
          }
          side.style.transform =  "scaleX("+ ( (pjs[a].oRight) ? (1) : (-1) ) +")";
     });
}



function fntn(a,b){
     /*
          FUNCIONES DISPONIBLES
               
               setActor(a,b,c)
               bg(a)


      */
     let p = b.split("+");
     try {
          window[a](p);
     } catch (error) {
          console.log("Error:"+error);
     }
     
}

//  Funciones Escenciales

function setActor(array){
     let a = array[0];
     let n = array[1];
     let s = array[2] || pjs[a].box;
     let side = document.getElementById(s);
     side.style.backgroundImage = "url("+pjs[a].sprite+")";
     side.style.backgroundSize = (pjs[a].size * 100) + "%";
     side.style.backgroundPosition = ((n-1) * -100)+"%";
     side.style.transform =  "scaleX("+ ( (pjs[a].oRight) ? (1) : (-1) ) +")";
}

function bg(array){
     let a = array || 0;
     let bg = document.getElementById("bg");
     bg.style.backgroundPosition = "-"+(a*100)+"% 0%";
};




// FPS

let fps = document.getElementById('fps_data');
let fps_control = document.getElementById('fps_control');

setInterval(() => {
     fps.innerHTML = "";
     Object.entries(control).forEach(e => {
          const [k,v] = e;
          fps.innerHTML += k + " : "+ v +"<br>";
     });
     fps.innerHTML += "--------------<br>";
     fps_control.innerHTML = "<span id='ctrl'>"+control.state+"</span>";
     Object.entries(talking).forEach(e => {
          const [k,v] = e;
          fps.innerHTML += k + " : "+ v +"<br>";
     });
}, 500);

// FIN DE FPS

// B A C K  S T A G E
/* Funciones disponibles
     
*/
function bs(p){
     //Personajes y Control
     let entity = p.split(";");
     // entity    personaje:f1=a,f2=b  y control:page=1
     entity.forEach(e=> {
          let alt = e.split(":");
          // Pjs o Ctrl : Alteraciones
          // alt         personaje   y    f1=a,f2=b
          let ent = alt[0];
          // ent         personaje
          // Propiedad y Valor
          let fun = alt[1].split(",");
          // fun         f1=a         y      f2=b
          fun.forEach(f=> {
               let pro = f.split("=");
               // pro    f1        y         a
               if(ent == "function"){
                    fntn(pro[0],pro[1]);
               }else if(ent == "control"){
                    // console.log("antes: "+ control[pro[0]]);
                    control[pro[0]] = pro[1];
                    // console.log("Nuevo valor: "+ control[pro[0]]);
               }else{
                    // console.log("Valor antiguo: "+pjs[ent][pro[0]]);
                    if(pro[0] == "box"){
                         document.getElementById(pjs[ent][pro[0]]).style.backgroundImage = "none";
                    }
                    if(pro[0] == "oRight"){
                         console.log("Valor a asignar a "+pro[0]+"es : "+pro[1]);
                         console.log(pro[1] === "true");
                         pjs[ent][pro[0]] = pro[1] === "true";
                         console.log(pjs[ent][pro[0]]);
                    }else{
                         pjs[ent][pro[0]] = pro[1];
                    }
                    // console.log("Valor nuevo: "+pjs[ent][pro[0]]);
               }
               
          });
     });
}

// Control

document.getElementById('fps_control').addEventListener("click",play);

function play(){
     control.state = "play";
     fps_control.removeEventListener('click',play);
     fps_control.addEventListener('click',pause);
     start();
}

function pause(){
     control.state = "pause";
     control.repro = false;
     fps_control.removeEventListener('click',pause);
     fps_control.addEventListener('click',play);
}

function stop(){
     fps_control.removeEventListener('click',play);
     fps_control.removeEventListener('click',pause);
     fps_control.addEventListener('click',play);
     control.page = 0;
     control.repro = false;
     control.state = "stop";
}

function endWrite(){
     
}

function endWriteR(){
     if(control.state == "play"){
          setTimeout(() => {
               next();
          }, control.paget);
     }
}

function next(){
     try {
          if(window[control.history][control.page] !== undefined && control.state === "play"){  
               
               if(window[control.history][control.page][2] !== undefined && window[control.history][control.page][2] !== ""){
                    bs(window[control.history][control.page][2]);
               }
               if(window[control.history][control.page][1] !== undefined){
                    actor(window[control.history][control.page][1]);
               }
               
               write(window[control.history][control.page][0]);
               // if(control.repro){
                    control.page++;
               // }else{
                    control.repro = true;
               // }
          }else{
               console.log("chacabo 1");
               stop();
          }
     } catch (error) {
          control.repro = false;
          console.log("chacabo 2");
     }    
}

function goToPage(a,b){
     control.page = a;
     let f = b || false;
     if(b){
     next();
     }
}

function start(){
     // control.action = setInterval(() => {
     //      if(control.state === "play"){
     //           ++contador;
     //           console.clear();
     //           console.log(contador);
     //           if(history[control.box]  === undefined){
     //                setTimeout(() => {
     //                     next();
     //                }, control.paget);
     //           }
     //      }
     // }, 100);
     next();
     control.repro = true;
}

function previous(){
    --control.page;
}

function sleep(a){
     console.log("A C T I V A D O");
     let protector = document.getElementById("protector");
     setTimeout(() => {
          protector.style.backgroundColor = "black";
          protector.style.opacity = 0.85;
          protector.style.zIndex = 10;
          pause();
          favor();
     }, 270);
}

function favor(){
     setTimeout(() => {
          write("Un momento","protector",100);
     }, 2500);
}