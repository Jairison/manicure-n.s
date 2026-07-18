// Animação de entrada dos cards

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";

    setTimeout(()=>{

        card.style.transition=".6s ease";
        card.style.opacity="1";
        card.style.transform="translateY(0)";

    },index*150);

});

// Efeito de clique

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.96)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },120);

    });

});

// Hover na logo

const logo=document.querySelector(".logo");

logo.addEventListener("mousemove",()=>{

    logo.style.boxShadow="0 0 40px #d4af7a";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.boxShadow="0 0 25px rgba(212,175,122,.5)";

});

// Saudação automática

const hora=new Date().getHours();

let saudacao="";

if(hora<12){

    saudacao="Bom dia! ☀️";

}else if(hora<18){

    saudacao="Boa tarde! 🌸";

}else{

    saudacao="Boa noite! ✨";

}

console.log(saudacao);

// Rolagem suave

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",()=>{

        document.body.style.transition=".2s";
        document.body.style.opacity=".96";

    });

});