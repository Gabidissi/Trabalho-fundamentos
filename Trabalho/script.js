document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const nome = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const mensagem = document.querySelector("textarea").value.trim();

        // Validar nome (apenas letras e pelo menos 3 caracteres)
        const nomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(nome);


        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios do formulário!");
            event.preventDefault();
        } else if (!nomeValido) {
            alert("Por favor, insira seu nome verdadeiro.");
            event.preventDefault();
        }
    });
});
