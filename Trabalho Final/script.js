// Mostra os cartões da categoria escolhida e atualiza a contagem.
function filtrarProjetos(categoria) {
    const projetos = document.querySelectorAll(".projeto");
    const botoes = document.querySelectorAll(".filtro");
    let quantidade = 0;

    projetos.forEach(function(projeto) {
        const mostrar = categoria === "todos" || projeto.dataset.categoria === categoria;
        projeto.hidden = !mostrar;

        if (mostrar) {
            quantidade++;
        }
    });

    botoes.forEach(function(botao) {
        botao.setAttribute("aria-pressed", botao.dataset.filtro === categoria);
    });

    const texto = quantidade === 1 ? " projeto encontrado" : " projetos encontrados";
    document.getElementById("quantidade-projetos").textContent = quantidade + texto;
}

// Prepara a mensagem para concluir o envio no aplicativo de e-mail.
function prepararEmail(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const assunto = encodeURIComponent("Contato pelo portfólio - " + nome);
    const texto = encodeURIComponent("Nome: " + nome + "\nE-mail: " + email + "\n\n" + mensagem);

    document.getElementById("retorno-contato").textContent =
        "Revise a mensagem no seu aplicativo de e-mail para concluir o envio.";
    window.location.href = "mailto:caioalvesb23@gmail.com?subject=" + assunto + "&body=" + texto;
}
