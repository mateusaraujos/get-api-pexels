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
            .then(result => makeImages(result));
    } catch (erro) {
        console.log(erro.message);
    }

    // Estilos da página após apertar o botão.
    LOAD_BTN.style.display = "none";
    document.getElementById("sub").style.flexDirection = "column";
    document.getElementById("display-images").style.marginBottom = "30px";
});

/**
 * Função para criar todas as tags ao redor das imagens.
 */
const makeImages = (result) => {
    // Para cada imagem que é recebida.
    const novoArray = result.photos.map((image) => {
        // Cria uma figure.image-figure.
        const imageFigure = document.createElement("figure");
        imageFigure.setAttribute("class", "image-figure");
        // Cria a imagem dentro de figure.
        imageFigure.innerHTML = `
            <a href=${image.src.large} target="_blank">
                <img class="image" src=${image.src.large} alt=${image.url}>
            </a>
            <figcaption title=${image.photographer} class="caption">📷 ${image.photographer}</figcaption>
        `;
        // Coloca article dentro de section#display-images.
        document.getElementById("display-images").appendChild(imageFigure);
    });
};