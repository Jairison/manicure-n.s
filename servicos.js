const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*180);

});

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.background=`radial-gradient(circle at ${x}px ${y}px,
rgba(212,175,122,.25),
rgba(255,255,255,.08))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});