const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*150);

});

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 25px 50px rgba(212,175,122,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});