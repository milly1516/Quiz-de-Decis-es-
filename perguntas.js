export const perguntas = [
    {
        enunciado: "Fase I: Sua nave encontra uma tempestade solar imprevisível. O painel indica falha iminente. O que você faz?",
        opcoes: [
            {
                texto: "Desviar o curso em direção aos asteroides.",
                proximo: 1
            },
            {
                texto: "Acelerar no limite máximo para atravessar.",
                proximo: 2
            }
        ]
    },
    {
        enunciado: "Fase II-A: Você se escondeu nos asteroides, mas detectou um sinal desconhecido. A tripulação ficou de queixo caído!",
        opcoes: [
            {
                texto: "Investigar a origem do sinal de rádio.",
                resultado: "Você descobriu uma civilização antiga e venceu o desafio com honras!"
            },
            {
                texto: "Ignorar o sinal e retornar à rota principal.",
                resultado: "Sua combustível acabou no caminho de volta. Fim de jogo!"
            }
        ]
    },
    {
        enunciado: "Fase II-B: Ao acelerar demais, os motores superaqueceram e pisaram na bola!",
        opcoes: [
            {
                texto: "Ejetar a cápsula de emergência.",
                resultado: "Você salvou sua vida, mas ficou à deriva no espaço."
            },
            {
                texto: "Tentar resfriar os motores manualmente.",
                resultado: "Com muito esforço, você conseguiu pousar em segurança em um planeta habitável!"
            }
        ]
    }
];