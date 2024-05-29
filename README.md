kvar jogadores = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function gerarNumerosPorColuna() {
    const colunas = [];
    const intervalos = [
        { min: 1, max: 15 },   // Coluna B
        { min: 16, max: 30 },  // Coluna I
        { min: 31, max: 45 },  // Coluna N
        { min: 46, max: 60 },  // Coluna G
        { min: 61, max: 75 }   // Coluna O
    ];

    intervalos.forEach(intervalo => {
        let numeros = [];
        for (let i = intervalo.min; i <= intervalo.max; i++) {
            numeros.push(i);
        }
        numeros = shuffle(numeros);
        colunas.push(numeros.slice(0, 5)); // Pegando os primeiros 5 números de cada coluna
    });

    return colunas;
}

function criarTabela(nome, cartela) {
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    td_nome.colSpan = 5;
    tr_nome.appendChild(td_nome);

    const tr_letras = document.createElement("tr");
    const letras = ["B", "I", "N", "G", "O"];
    letras.forEach(letra => {
        const th = document.createElement("th");
        th.innerHTML = letra;
        tr_letras.appendChild(th);
    });

    thead.appendChild(tr_nome);
    thead.appendChild(tr_letras);

    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            var td = document.createElement('td');
            if (i === 2 && j === 2) {
                td.innerText = "X"; // Posição central "Free"
            } else {
                td.innerText = cartela[j][i];
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const espacoCartelas = document.getElementById("espaco_cartelas");
    espacoCartelas.appendChild(tabela);
}

function reiniciarJogo() {
    jogadores = [];
    document.getElementById("espaco_cartelas").innerHTML = '';
}

function pedirNomeECriarTabela() {
    const nomeJogador = prompt("Digite o seu nome:");

    if (nomeJogador.length >= 5) {
        var cartela = gerarNumerosPorColuna();

        jogadores.push({
            nomeJogador: nomeJogador,
            cartela: cartela
        });

        criarTabela(nomeJogador, cartela);
        console.log(jogadores);
    } else {
        alert("Nome muito curto. Por favor, digite um nome com pelo menos 5 letras.");
    }
}
