const lista = document.querySelectorAll("[data-lista]");
const cor = document.querySelectorAll("[cor]");
const botao1 = document.querySelector("#botao1")
const botao2 = document.querySelector(".botao2")


botao1.addEventListener("click", () => {
    lista.forEach ((elemento ) => {
        elemento.style = "visibility:visible:";
    })
});


botao2.addEventListener("click", () => {
    lista.forEach ((elemento ) => {
        elemento.style = "visibility:hidden";
    })
});


