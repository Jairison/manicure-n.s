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

const numero="5585999999999"; // coloque seu número

const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

window.open(url,"_blank");

});