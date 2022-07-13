window.onload = lol;

var muss = new Object;
// let afk = undefined;
let cn;
var pol = 0;
var tot = 0;

function lol(){
     document.getElementById("progre").innerText = "Cargando...";
     Object.entries(url).forEach(e => {
               tot++;
     });

     Object.entries(url).forEach(f => {
          // muss[pol] = new Audio(f[1]);
          $(muss[pol]).ready(function() {
               $.ajax({
                    url:f[1],
                    success: function() {
                         pol++;
                         document.getElementById("progre").style.width = (((pol)*100)/tot) + "%"; 
                         if(pol == tot){
                              // console.log("si");
                              setActor(["chinx",56,"pj1"]);
                              document.getElementById("progre").innerText = "Completado :³";
                              document.getElementById("starting").innerHTML = "<button id='iniciarTesteo'>INICIAR</button>";
                              document.getElementById("iniciarTesteo").addEventListener("click",btnStart); 
                              document.getElementById("noti").innerHTML = "v. 1.0.2 alfa";
                         }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown){
                         document.getElementById("noti").innerHTML = "Error al cargar los archivos multimedia, vuelva a ingresar la página o destruya el Internet"
                    }
               });
          });
          
        
          
     });
}

function btnStart(){
     document.getElementById("iniciarTesteo").removeEventListener("click",btnStart);
     document.getElementById("ini").style.animation = "woo";
     document.getElementById("ini").style.animationDuration = 1;
     screenHide();
     setTimeout(() => {
          document.getElementById("protector").innerHTML = "";
          document.getElementById("protector").style.opacity = 1;
          document.getElementById("protector").style.backgroundColor = "rgba(0, 0, 0, 0)";
          
          document.getElementById("screen").innerHTML += '<div id="controlAuto" class="control">ON</div>';
          document.getElementById("controlAuto").addEventListener("click",controlAuto);
          document.getElementById(control.btnNext).addEventListener("click",condNext);
          // document.getElementById("protector").innerHTML = '<div id="control" class="control">auto</div>';
          // document.getElementById(control.btnNext).onmousedown = btnDownAct;
          // document.getElementById(control.btnNext).onmouseup = btnUpAct;
          play();
     }, 1500);
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




function musics(ti,co = "",lo = false,vo = 0.2){
     /* 
          t = TITLE      ->   String
          b = COMMAND    ->   play|stop|pause|restart
          l = LOOP       ->   true|false
          v = VOLUMEN    ->   0-1
     */
     let t;
     let c;
     let l;
     let v;
     if(Array.isArray(ti)){
          t = ti[0];
          c = ti[1];
          l = ti[2] || false;
          v = ti[3] || 0.1;
     }else{
          t = ti;
          c = co;
          l = lo;
          v = vo;
     }
     
     // console.log(t);
     // console.log(c);
     // console.log(l);
     // console.log(v);
     
     if(sounds.music[t]["track"] === undefined){
          sounds.music[t]["track"] = new Audio(sounds.music[t]["src"]);
     }
     
     if(sounds.music[t]["track"] !== undefined){
          if(c == "play"){
               sounds.music[t]["track"].play();
          }
          if(c == "stop"){
               sounds.music[t]["track"].pause();
               sounds.music[t]["track"].currentTime = 0
          }
          if(c == "pause"){
               sounds.music[t]["track"].pause();
          }
          if(c == "restart"){
               sounds.music[t]["track"].currentTime = 0
               sounds.music[t]["track"].play();
          }
     }
     // LOOP
     // console.log("LOOOOOP");
     // console.log(l);
     // console.log(sounds.music[t]["track"]);
     if(l == "true" && sounds.music[t]["track"] !== undefined){
          // console.log("SIIIIIIIIII");
          sounds.loop[t] = setInterval(() => {
               if((sounds.music[t]["track"].currentTime + 0.10) >= sounds.music[t]["track"].duration){
                    sounds.music[t]["track"].currentTime = 0;
                    sounds.music[t]["track"].play();
               }
          }, 10);
     }
     if(l == "false" && sounds.loop[t] !== undefined){
          // console.log("SIIIIIIIIIIN'T");
          clearInterval(sounds.loop[t]);
     }
     

     // VOLUMEN
     sounds.music[t]["track"].volume = v;
     
}

// Funciones BASICAS

//   W R I T E 

function write(word,place,speed,voice){
     word = con(word);
     if((control.noInterrupt == "true" ) && talking[control.box] != undefined){
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
               control.repro = false;
               box.textContent = word;
               delete talking[l+"t"];
               delete talking[l];
               ++control.page;
               if(control.reproAuto == "true" || control.reproAuto === true){
                    endWrite();
               }
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
               control.repro = true;
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
                         control.repro = false;
                         delete talking[l+"t"];
                         delete talking[l];
                         //   control.noInterrupt = false;
                         ++control.page;
                         if(control.reproAuto == "true" || control.reproAuto === true){
                              // next;
                              endWrite();
                         }
                         
                    }
                    i++;
               }
          },s);
     }
}

// C O N

function urlGet(value){
     let p;
     let lonk;
     try {
           lonk = document.URL.split("?");
           p = lonk[1].split("=");
     } catch (error) {
          return "Internauta del Deep Web";
     }
     
     // console.log(p[0]);
     // console.log(value);
     // console.log(p[1]);
     if(p[0] == value){
          return cdf[p[1]];
     }else{
          return "Internauta del Deep Web";
     }
     
}

function con(word){
     let w = "";
     let wordArray = word.split("%");
          wordArray.forEach(e => {
               if( keys[e] !== undefined){
                    w += keys[e];
               }else{
                    w += e;
               }
          });
     return w;
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
          // console.log("Error:"+error);
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

// let fps = document.getElementById('fps_data');
// let fps_control = document.getElementById('fps_control');

// setInterval(() => {
//      fps.innerHTML = "";
//      Object.entries(control).forEach(e => {
//           const [k,v] = e;
//           fps.innerHTML += k + " : "+ v +"<br>";
//      });
//      fps.innerHTML += "--------------<br>";
//      fps_control.innerHTML = "<span id='ctrl'>"+control.state+"</span>";
//      Object.entries(talking).forEach(e => {
//           const [k,v] = e;
//           fps.innerHTML += k + " : "+ v +"<br>";
//      });
// }, 500);

// document.getElementById('fps_control').addEventListener("click",play);

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
                    if(pro[1] == "false" || pro[1] == "true"){
                         if(pro[1] == "true"){
                              control[pro[0]] = true;
                         }else{
                              control[pro[0]] = false;
                         }
                         
                    }else{
                         // HERE!
                         control[pro[0]] = con(pro[1]);
                    }
                    
                    // console.log("Nuevo valor: "+ control[pro[0]]);
               }else{
                    // console.log("Valor antiguo: "+pjs[ent][pro[0]]);
                    if(pro[0] == "box"){
                         document.getElementById(pjs[ent][pro[0]]).style.backgroundImage = "none";
                    }
                    if(pro[0] == "oRight"){
                         // console.log("Valor a asignar a "+pro[0]+"es : "+pro[1]);
                         // console.log(pro[1] === "true");
                         pjs[ent][pro[0]] = pro[1] === "true";
                         // console.log(pjs[ent][pro[0]]);
                    }else{
                         pjs[ent][pro[0]] = pro[1];
                    }
                    // console.log("Valor nuevo: "+pjs[ent][pro[0]]);
               }
               
          });
     });
}

// Control


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
               
          }else{
               // console.log("se acabo 1");
               stop();
          }
          if(control.reproAuto){
               controlON();
          }else{
               controlOFF();
          }
     } catch (error) {
          control.repro = false;
          // console.log("se acabo 2");
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
     next();
     // control.repro = true;
}

function previous(){
    --control.page;
}

function sleep(){
     // console.log("A C T I V A D O");
     document.getElementById("controlAuto").style.display = "none";
     let protector = document.getElementById("protector");
     setTimeout(() => {
          protector.style.backgroundColor = "black";
          protector.style.zIndex = 10;
          protector.style.backgroundImage = "url("+url['win_bg']+")";
          protector.style.backgroundSize = "100%";
          setTimeout(() => {
               protector.innerHTML = "<div id='final' class='final'>Muchas gracias</div>";
               protector.innerHTML += "<div id='co' class='co'>Este dispositivo se autodestruirá en </div><div id='sec' class='sec'>00:05</div>";
               autodestrucc();
          }, 2000);
          musics("test","play",false,0.2);
          // pause();
          // favor();
     }, 270);
}

function autodestrucc(){
     let fel;
     let i = 5;
     fel = setInterval(() => {
          document.getElementById("sec").innerText = "00:0"+i;
          --i;
          if(i <= 0){
               document.getElementById("sec").innerText = "Es broma :³";
               clearInterval(fel);
          }
     }, 1000);
}

function favor(){
     setTimeout(() => {
          write("Un momento","protector",100);
     }, 2500);
}

function screenHide(){
     let clearScrean;
     let i = 1;
     clearScrean = setInterval(() => {
             i -= 0.01;
             document.getElementById("protector").style.opacity = i;
             if(document.getElementById("protector").style.opacity <= 0){
                 clearInterval(clearScrean);
             }
         }, 10);
 }

 let inis;
 function dance(a){
     var t = false;
     inis = setInterval(() => {
          bs(a[0]+":"+a[1]+"="+t);
          actor("chinx/37");
          t = !t;
     }, 100);
 }

 function stopDance(a){
     clearInterval(inis);
 }

 function condNext(){
     if( control.btnNextAvailable ){
          // console.log("ta bien");
          control.reproAuto = false;
          next();
     }else{
          // console.log("que raro");
     }
 }

 var controlValue;

 function controlAuto(){
     if(control.reproAuto == true || control.reproAuto == "true"){
          document.getElementById("controlAuto").style.backgroundColor = "orange";
          document.getElementById("controlAuto").innerText = "OFF";
          control.reproAuto = false;
     }else{
          document.getElementById("controlAuto").style.backgroundColor = "greenyellow";
          document.getElementById("controlAuto").innerText = "ON";
          control.reproAuto = true;
          if(control.repro != true){
               next();
          }
     }
 }

 function controlON(){
     document.getElementById("controlAuto").style.backgroundColor = "greenyellow";
     document.getElementById("controlAuto").innerText = "ON";
 }

 function controlOFF(){
     document.getElementById("controlAuto").style.backgroundColor = "orange";
     document.getElementById("controlAuto").innerText = "OFF";
 }
//  var btnUp, btnDown;

//  function btnDownAct(){
//      btnDown = new Date();
//  }

//  function btnUpAct(){
//      btnUp = new Date();
//      var time = btnUp - btnDown;

//      if(control.btnNextAvailable === true){
//           if(time > 500){
//                if(control.ReproAuto == true || control.ReproAuto == "true"){
//                     control.reproAuto = false;
//                     // console.log("Modo Manual Activado");
//                }else{
//                     // console.log("Modo Automatico Activado");
//                     control.reproAuto = true;
//                     if( control.btnNextAvailable == true|| control.btnNextAvailable == "true"){
//                          next();
//                     }
//                }
//           }else{
//                control.reproAuto = false;
//                if( control.btnNextAvailable == true|| control.btnNextAvailable == "true"){
//                     if( control.btnNextAvailable == true|| control.btnNextAvailable == "true"){
//                          next();
//                          // console.log("Modo Automatico Desactivado");
//                     }
//                }
//           }
//      }

//  }
