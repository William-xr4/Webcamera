var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
var Text_box=document.getElementById("text_box");
var novo_audio=new Audio();
novo_audio.autoplay=true;
novo_audio.src=navigator.userAgent.match(/Firefox/) ? 'shutter.ogg' : 'shutter.mp3';


function Iniciar(){
    Text_box.innerHTML="";
    Recognition.start();
    console.log("entrou!");
}
Recognition.onresult=function(evento){
    console.log(evento);
    var conteudo=evento.results[0][0].transcript;
    console.log('conteudo: '+conteudo);
    Text_box.innerHTML=conteudo;
    if(conteudo=="tire minha foto"){
        Speak();
    }
}
function Speak(){
    var Synth=window.speechSynthesis;
    var Dado_da_fala="Tirando sua foto em 5 segundos!";
    var UtterThis=new SpeechSynthesisUtterance(Dado_da_fala);
    Synth.speak(UtterThis);
    Webcam.attach(Camera);
    setTimeout(function(){
        video();
        save();
    }, 5000);
}
function video(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML='<img id="video" src="'+datauri+'">';
    });
    novo_audio.play();
}
var Camera=document.getElementById("Webcam");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
})
function save(){
    var link =document.getElementById("link");
    var img =document.getElementById("video").src;
    link.href=img;
    link.click();
}