document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO TEMA CLARO/ESCURO ---
    const btnTema = document.getElementById("btn-tema");
    const body = document.body;

    // Verifica se há preferência salva (opcional, mas bom pra UX)
    // Se quiser simplificar, pode remover essa parte inicial
    
    btnTema.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
        
        if(body.classList.contains("dark-theme")) {
            btnTema.innerText = "Modo Claro";
        } else {
            btnTema.innerText = "Modo Escuro";
        }
    });

    // --- VALIDAÇÃO E ENVIO DO FORMULÁRIO ---
    const form = document.getElementById("form-contato");

    if(form) { // Verifica se o formulário existe na página
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Validação 1: Campos Vazios
            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos do formulário.");
                return;
            }

            // Validação 2: Formato de E-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um endereço de e-mail válido.");
                return;
            }

            // Simulação de Sucesso
            alert(`Obrigado pelo contato, ${nome}! \n\nSua mensagem foi "enviada" com sucesso (Simulação).`);
            
            form.reset();
        });
    }
});