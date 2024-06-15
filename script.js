const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Qual é o maior mamífero do mundo?",
        alternativas: [
            {
                texto: "a) Baleia Azul ",
                afirmacao: "1. Acertou!."
            },
            {
                texto: "b) Girafa ",
                afirmacao: "1.ERROUU!!!!!"
            }
        ]
    },
    {
        enunciado: "2. Qual desses animais pode mudar de cor?",
        alternativas: [
            {
                texto: "a) Camaleão ",
                afirmacao: "2.Acertou."
            },
            {
                texto: "b) Golfinho ",
                afirmacao: "2.Errou."
            }
        ]
    },
    {
        enunciado: "3. Qual desses animais é conhecido por seu salto alto?",
        alternativas: [
            {
                texto: " a) Canguru ",
                afirmacao: "3.Acertou"
            },
            {
                texto: " b) Leão.",
                afirmacao: "3.Errou."
            }
        ]
    },
    {
        enunciado: "4. Qual desses animais é famoso por sua habilidade de eco localização?",
        alternativas: [
            {
                texto: "a) Morcego ",
                afirmacao: "4. Acertou."
            },
            {
                texto: " b) Rinoceronte",
                afirmacao: "4.Errou!"
            }
        ]
    },
    {
        enunciado: "5. Qual desses animais é considerado o mais rápido em terra?",
        alternativas: [
            {
                texto: "a) Tigre",
                afirmacao: "5.Errou"
            },
            {
                texto: " b) Guepardo",
                afirmacao: "5.Acertou."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Gabarito...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
