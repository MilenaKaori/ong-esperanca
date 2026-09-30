import {
    configurarFormulario,
    mostrarCadastros
} from "./formulario.js";


const conteudo =
    document.getElementById(
        "conteudo-principal"
    );

const menuLinks =
    document.querySelector(".menu-links");

const botaoMenu =
    document.querySelector(".btn-hamburguer");


// Inicializa a biblioteca AOS
AOS.init({
    duration: 600,
    once: true
});


// Menu hambúrguer
botaoMenu.addEventListener(
    "click",
    function() {

        menuLinks.classList.toggle(
            "ativo"
        );

    }
);


// Navegação da SPA
function navegar() {

    const pagina =
        window.location.hash;

    conteudo.innerHTML = "";


    if (pagina === "#sobre") {

        conteudo.innerHTML = `
            <section data-aos="fade-up">

                <h2>Sobre nós</h2>

                <img src="../imagens/voluntarios ong.jpg.jpg"
                     alt="Voluntários da ONG realizando uma atividade comunitária">

                <p>
                    Somos uma organização dedicada a promover ações sociais
                    e contribuir para o desenvolvimento da comunidade.
                </p>

            </section>
        `;
    }


    else if (pagina === "#projetos") {

        const projetos = [

            {
                titulo:
                    "Projeto de Inclusão Digital",

                descricao:
                    "Promovemos atividades de inclusão digital para ampliar o acesso à tecnologia e à informação."
            },

            {
                titulo:
                    "Projeto de Apoio à Comunidade",

                descricao:
                    "Realizamos ações de apoio e desenvolvimento social para pessoas em situação de vulnerabilidade."
            }

        ];


        let listaProjetos = "";


        projetos.forEach(
            function(projeto) {

                listaProjetos += `
                    <article data-aos="fade-up">

                        <h3>
                            ${projeto.titulo}
                        </h3>

                        <p>
                            ${projeto.descricao}
                        </p>

                    </article>
                `;

            }
        );


        conteudo.innerHTML = `

            <section>

                <h2 data-aos="fade-right">
                    Nossos projetos
                </h2>

                ${listaProjetos}

            </section>

        `;
    }


    else if (pagina === "#cadastro") {

        conteudo.innerHTML = `

            <section data-aos="fade-up">

                <h2>
                    Seja voluntário
                </h2>


                <form id="form-voluntario">

                    <label for="nome">
                        Nome:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                    >

                    <small
                        class="mensagem-campo">
                    </small>


                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >

                    <small
                        class="mensagem-campo">
                    </small>


                    <label for="mensagem">
                        Por que deseja ser voluntário?
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        required>
                    </textarea>

                    <small
                        class="mensagem-campo">
                    </small>


                    <p id="mensagem-validacao"></p>


                    <button type="submit">
                        Enviar cadastro
                    </button>

                </form>


                <div id="lista-cadastros"></div>

            </section>

        `;


        configurarFormulario();

        mostrarCadastros();

    }


    else if (pagina === "#contato") {

        conteudo.innerHTML = `

            <section data-aos="fade-up">

                <h2>
                    Entre em contato
                </h2>

                <p>
                    E-mail:
                    contato@ongesperanca.org
                </p>

                <p>
                    Telefone:
                    (11) 99999-9999
                </p>

            </section>

        `;
    }


    else {

        conteudo.innerHTML = `

            <section data-aos="fade-up">

                <h2>
                    Bem-vindo à ONG Esperança
                </h2>

                <p>
                    Somos uma organização dedicada a promover ações sociais
                    e contribuir para o desenvolvimento da comunidade.
                </p>

            </section>

        `;
    }


    menuLinks.classList.remove(
        "ativo"
    );


    // Atualiza a biblioteca AOS
    AOS.refreshHard();

}


// Evento de navegação
window.addEventListener(
    "hashchange",
    navegar
);


// Event delegation no menu
menuLinks.addEventListener(
    "click",
    function(evento) {

        if (
            evento.target.tagName === "A"
        ) {

            menuLinks.classList.remove(
                "ativo"
            );

        }

    }
);


// Carrega a página inicial
navegar();