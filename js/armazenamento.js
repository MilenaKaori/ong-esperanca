export function salvarCadastro(cadastro) {
    let cadastros = JSON.parse(
        localStorage.getItem("cadastrosVoluntarios")
    ) || [];

    cadastros.push(cadastro);

    localStorage.setItem(
        "cadastrosVoluntarios",
        JSON.stringify(cadastros)
    );
}


export function obterCadastros() {
    return JSON.parse(
        localStorage.getItem("cadastrosVoluntarios")
    ) || [];
}