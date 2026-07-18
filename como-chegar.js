const card=document.querySelector(".card");

card.style.opacity="0";
card.style.transform="translateY(50px)";

setTimeout(()=>{

card.style.transition=".8s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},300);

const itens=document.querySelectorAll(".item");

itens.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-5px)";

item.style.transition=".3s";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0)";

});

});