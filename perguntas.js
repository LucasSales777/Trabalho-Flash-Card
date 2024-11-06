const perguntas = [
        {
            pergunta: "Quem é o maior artilheiro da história do Corinthians?",
            opcoes: [
                "Ronaldo Fenômeno",
                "Júnior",
                "Lima",
                "Luizão"
            ],
            resposta: 0 // índice da resposta correta
        },
        {
            pergunta: "Qual é o estádio do Corinthians?",
            opcoes: [
                "Maracanã",
                "Arena Corinthians",
                "Pacaembu",
                "Morumbi"
            ],
            resposta: 1
        },
        {
            pergunta: "Em que ano o Corinthians conquistou a sua primeira Libertadores?",
            opcoes: [
                "1999",
                "2000",
                "2012",
                "2005"
            ],
            resposta: 2
        },
        {
            pergunta: "Quem foi o técnico do Corinthians na conquista da Copa do Mundo de Clubes de 2000?",
            opcoes: [
                "Tite",
                "Luxemburgo",
                "Oswaldo de Oliveira",
                "Leão"
            ],
            resposta: 2
        },
        {
            pergunta: "Qual é o mascote oficial do Corinthians?",
            opcoes: [
                "Corinthian Cat",
                "Fiel",
                "Gavião",
                "Leão"
            ],
            resposta: 2
        },
        {
            pergunta: "Quantos títulos de Campeonato Brasileiro o Corinthians conquistou até 2024?",
            opcoes: [
                "5",
                "7",
                "8",
                "10"
            ],
            resposta: 2
        }
    ];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;
