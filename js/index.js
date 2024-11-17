
const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.select");
        botaoSelecionado.classList.remove("select");
        
        botao.classList.add("select");
    });
});


const personagens = document.querySelectorAll(".character");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarpersonagem();


        botao.classList.add("select");
        personagens[indice].classList.add("select")

    });
});

function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".select.character");
    personagemselecionado.classList.remove("select");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.select");
    botaoSelecionado.classList.remove("select");
}
