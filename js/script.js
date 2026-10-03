const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

const form = document.querySelector(".contato-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const pet = document.getElementById("pet").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !telefone || !pet || !servico) {
        alert("Preencha os campos obrigatórios.");
        return;
    }

    alert(
        `Olá, ${nome}!\n\n` +
        `Sua solicitação de agendamento para ${pet} foi enviada.\n` +
        `Serviço: ${servico}\n\n` +
        `A equipe Vet Life entrará em contato pelo telefone ${telefone}.`
    );

    form.reset();
});