//console.log("Hola mundo");

//DOM
//querySelector recoge el primero
//querySelectorAll recoge todos
/*
let container = document.querySelector(".container");
console.log(container);

let links = document.querySelectorAll("a");
//recorrer un array
links.forEach(function(link){
  console.log(link);
});
*/

//boton de direccion a las paginas
/*let paginas = document.querySelectorAll(".paginas")
paginas.forEach(function(pagina){
  pagina.addEventListener("click", function(ev){
    ev.preventDefault();

    let content = document.querySelector(".content");
    //quitamos la animacion actual
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");
    //Agregamos animacionde salida
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    //let lugar = pagina.attr("href");
    let href = document.getElementByClassName(".pagina")[0].getAttribute("href");
    console.log(href);
    setTimeout(function(){
      location.href = "/" + href;
    }, 800);

    return false;
  });
});*/



//boton de salida de las paginas
let btnSalida = document.querySelector(".close");
btnSalida.addEventListener("click", function(ev){
  ev.preventDefault();

  let content = document.querySelector(".content");
  //quitamos la animacion actual
  content.classList.remove("animate__fadeInDown");
  content.classList.remove("animate__animated");
  //Agregamos animacionde salida
  content.classList.add("animate__fadeOutUp");
  content.classList.add("animate__animated");

  setTimeout(function(){
    location.href = "/viajes";
  }, 800);

  return false;
});
