const card = document.querySelector(".card");

card.style.opacity = "0";
card.style.transform = "translateY(40px)";

setTimeout(() => {

card.style.transition = ".8s";

card.style.opacity = "1";

card.style.transform = "translateY(0)";

},300);

const foto = document.querySelector(".foto img");

foto.addEventListener("mouseenter",()=>{

foto.style.transform="scale(1.05) rotate(2deg)";

foto.style.transition=".4s";

});

foto.addEventListener("mouseleave",()=>{

foto.style.transform="scale(1) rotate(0deg)";

});