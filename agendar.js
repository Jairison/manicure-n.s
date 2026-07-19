document
.getElementById("formulario")
.addEventListener("submit",function(e){

e.preventDefault();

const nome=document.getElementById("nome").value;

const telefone=document.getElementById("telefone").value;

const servico=document.getElementById("servico").value;

const data=document.getElementById("data").value;

const hora=document.getElementById("hora").value;

const obs=document.getElementById("obs").value;

const mensagem=
`Olá! Gostaria de agendar um horário.

👤 Nome: ${nome}

📱 WhatsApp: ${telefone}

💅 Serviço: ${servico}

📅 Data: ${data}

🕒 Horário: ${hora}

📝 Observações: ${obs}`;

const numero="5588999965396"; // coloque seu número

const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

window.open(url,"_blank");

});

function agendarWhatsApp() {

    alert("✨ Seja muito bem-vinda ao Studio Nielly Sousa!\n\nSerá um prazer cuidar da sua beleza. Você será direcionada ao WhatsApp para agendar seu horário. 💖");

    window.open(
    "https://wa.me/5588999965396?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20agendar%20um%20horário.%20Poderia%20me%20informar%20os%20dias%20e%20horários%20disponíveis?%20😊",
    "_blank"
);

}