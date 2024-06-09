// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
// passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    const cartoes = document.querySelectorAll(".cartao");
    const cartaoSelecionado = document.querySelector(".selecionado");

    // Remover a classe "selecionado" do cartão atualmente selecionado
    cartaoSelecionado.classList.remove("selecionado");

    // passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    if (cartaoAtual >= cartoes.length) {
        cartaoAtual = 0; // Volta para o primeiro cartão se chegou ao fim da lista
    }
    cartoes[cartaoAtual].classList.add("selecionado"); // Mostra o próximo cartão
});

// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    const cartoes = document.querySelectorAll(".cartao");
    const cartaoSelecionado = document.querySelector(".selecionado");

    // Remover a classe "selecionado" do cartão atualmente selecionado
    cartaoSelecionado.classList.remove("selecionado");

    // passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    if (cartaoAtual < 0) {
        cartaoAtual = cartoes.length - 1; // Vai para o último cartão se estiver no primeiro
    }
    cartoes[cartaoAtual].classList.add("selecionado"); // Mostra o cartão anterior
});
