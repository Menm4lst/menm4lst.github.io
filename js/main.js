alert("Hola Bienvenido/a, da clic en aceptar para visualizar la pagina");
alert("Espero que el siguiente trabajo sea de su agrado");
alert("Debido a mis nulos conocimientos en programación esto fue lo mejor que pude realizar");

const accordion = document.querySelector('.accordion__content');
const accordionItem = document.querySelector('.accordion__item');
let height = 0;

accordionItem.addEventListener('click',()=>{

if(!height){
    height = accordion.scrollHeight;
}else{
    height = 0;
}

accordion.style.height = `${height}px`; 




});





















