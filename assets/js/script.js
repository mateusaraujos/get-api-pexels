// Chave da API.
const API_KEY = "563492ad6f91700001000001c975700bee3844c3a89b839d093745cd";

// Botão para carregar as imagens.
const LOAD_BTN = document.getElementById("loadBtn");

// O clique do botão retornará uma promise
LOAD_BTN.addEventListener("click", async () => {
    try {
        // Tentando trazer os dados da API com fetch
        const DATA = await fetch(`https://api.pexels.com/v1/curated`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: API_KEY
            }
        }) // Transforma os dados em JavaScript Object Notation
            .then(result => result.json())
            .then(result => console.log(result));
    } catch (erro) {
        console.log(erro.message);
    }
});