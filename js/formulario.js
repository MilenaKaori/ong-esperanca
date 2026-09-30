import {
    salvarCadastro,
    obterCadastros
} from "./armazenamento.js";


export function configurarFormulario() {

    const formulario =
        document.getElementById("form-voluntario");

    const nome =
        document.getElementById("nome");

    const email =
        document.getElementById("email");

    const mensagem =
        document.getElementById("mensagem");

    const mensagemValidacao =
        document.getElementById("mensagem-validacao");


    function validarCampo(campo) {

        const aviso =
            campo.nextElementSibling;

        let valido = true;


        if (campo.value.trim() === "") {

            aviso.textContent =
                "Este campo é obrigatório.";

            valido = false;
        }

        else if (
            campo.id === "nome" &&
            campo.value.trim().length < 3
        ) {

            aviso.textContent =
                "Digite pelo menos 3 caracteres.";

            valido = false;
        }

        else if (campo.id === "email") {

            const formatoEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !formatoEmail.test(
                    campo.value.trim()
                )
            ) {

                aviso.textContent =
                    "Digite um e-mail válido.";

                valido = false;
            }
        }


        if (valido) {

            aviso.textContent =
                "Preenchimento correto.";

            campo.classList.remove("erro");

            campo.classList.add("sucesso");

        } else {

            campo.classList.remove("sucesso");

            campo.classList.add("erro");
        }


        return valido;
    }


    nome.addEventListener("input", function() {

        validarCampo(nome);

    });


    email.addEventListener("input", function() {

        validarCampo(email);

    });


    mensagem.addEventListener("input", function() {

        validarCampo(mensagem);

    });


    formulario.addEventListener(
        "submit",
        function(evento) {

            evento.preventDefault();


            const nomeValido =
                validarCampo(nome);

            const emailValido =
                validarCampo(email);

            const mensagemValida =
                validarCampo(mensagem);


            if (
                nomeValido &&
                emailValido &&
                mensagemValida
            ) {

                const novoCadastro = {

                    nome: nome.value.trim(),

                    email: email.value.trim(),

                    mensagem: mensagem.value.trim()

                };


                salvarCadastro(novoCadastro);


                mensagemValidacao.textContent =
                    "Cadastro salvo com sucesso!";

                mensagemValidacao.className =
                    "alerta alerta-info";


                mostrarCadastros();


                formulario.reset();


                document
                    .querySelectorAll(".mensagem-campo")
                    .forEach(function(aviso) {

                        aviso.textContent = "";

                    });


                document
                    .querySelectorAll(
                        "#form-voluntario input, #form-voluntario textarea"
                    )
                    .forEach(function(campo) {

                        campo.classList.remove(
                            "erro",
                            "sucesso"
                        );

                    });

            }

            else {

                mensagemValidacao.textContent =
                    "Verifique os campos destacados antes de continuar.";

                mensagemValidacao.className =
                    "alerta alerta-erro";
            }

        }
    );
}


export function mostrarCadastros() {

    const lista =
        document.getElementById(
            "lista-cadastros"
        );


    const cadastros =
        obterCadastros();


    if (cadastros.length === 0) {

        lista.innerHTML =
            "<p>Nenhum cadastro salvo ainda.</p>";

        return;
    }


    lista.innerHTML =
        "<h3>Cadastros salvos neste navegador</h3>";


    cadastros.forEach(function(cadastro) {

        const artigo =
            document.createElement("article");


        const titulo =
            document.createElement("h4");

        titulo.textContent =
            cadastro.nome;


        const emailCadastro =
            document.createElement("p");

        emailCadastro.textContent =
            "E-mail: " + cadastro.email;


        const mensagemCadastro =
            document.createElement("p");

        mensagemCadastro.textContent =
            "Motivo: " + cadastro.mensagem;


        artigo.appendChild(titulo);

        artigo.appendChild(emailCadastro);

        artigo.appendChild(mensagemCadastro);


        lista.appendChild(artigo);

    });
}