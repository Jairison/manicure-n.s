const fotos=document.querySelectorAll(".foto img");

const lightbox=document.querySelector(".lightbox");

const imagemGrande=document.getElementById("imagemGrande");

const fechar=document.querySelector(".fechar");

fotos.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

imagemGrande.src=img.src;

});

});

fechar.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}