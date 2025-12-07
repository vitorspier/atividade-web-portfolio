// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO TEMA CLARO/ESCURO [cite: 63] ---
    const btnTema = document.getElementById("btn-tema");
    const body = document.body;

    btnTema.addEventListener("click", function() {
        // Alterna a classe 'dark-theme' no corpo do site
        body.classList.toggle("dark-theme");
        
        // Muda o texto do botão conforme o tema
        if(body.classList.contains("dark-theme")) {
            btnTema.innerText = "Tema Claro";
        } else {
            btnTema.innerText = "Tema Escuro";
        }
    });

    // --- VALIDAÇÃO E ENVIO DO FORMULÁRIO [cite: 56, 58, 60] ---
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Validação 1: Campos Vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Validação 2: Formato de E-mail (Regex Simples) [cite: 59]
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido (ex: usuario@dominio.com).");
            return;
        }

        // Simulação de Envio bem-sucedido
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        // Limpar o formulário após o envio
        form.reset();
    });
});