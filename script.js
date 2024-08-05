const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    enunciados ,  
    "Você virou presidente e para liderar e escolher o futuro do Brasil,em primeiro lugar qual das dua opçoẽs você escolheria ?" ,
    alternativas, [
        "Não fazer mudanças, pois está tudo certo",
        "Começar a fazer algumas mudanças"
    ]
,
    "Com a resposta que você escolheu você demonstrou interesse em mudar o futuro do país quais dessas atitudes você acharia mais vantajosa para o nosso país?",
    alternativas, [
        "Conversar com pessoas que já passaram pelo cargo para entender quais foram as atitudes que elas tomaram para ver o que prejudicou e ajudou o nosso país ",
        "Ir pelo o instinto sem se comunicar com ninguém e sem ouvir ninguém"
    ],
    "Quanto tempo você levaria para colocar uma ação em pratica ?",
    alternativas, [
        "Levaria entre dois dias no máximo",
        "Não me preocuparia tanto com isso"
    ],
    " Quais problemas cruciais no Brasil você tentaria resolver ?",
    alternativas, [
        "Tentaria mudar as desigualdades no Brasil, tornando um país mais igual ",
        "Aumentar os salários dos parlamentares"
    ],

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta()

