var jogadores = [];

function gerarNumerosAleatorios(quantidade, min, max) {
    if (quantidade > (max - min + 1)) {
        console.log("Intervalo insuficiente ...");
        return [];
    }

    var numeros = [];

    while (numeros.length < quantidade) {
        var aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!numeros.includes(aleatorio)) {
            numeros.push(aleatorio);
        }
    }

    return numeros;
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
                td.innerText = "X";
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

function pedirnomeecriartabela() {
    const nomeJogador = prompt("Digite o seu nome:");

    if (nomeJogador.length >= 5) {
        var cartela = [
            gerarNumerosAleatorios(5, 1, 15),
            gerarNumerosAleatorios(5, 16, 30),
            gerarNumerosAleatorios(5, 31, 45),
            gerarNumerosAleatorios(5, 46, 60),
            gerarNumerosAleatorios(5, 61, 75)
        ];

        jogadores.push({
            nomeJogador: nomeJogador,
            cartela: cartela
        });

        criarTabela(nomeJogador, cartela);
        console.log(jogadores);
    }
    else {
        alert("Nome muito curto. Por favor, digite um nome com pelo menos 5 letras.");
    }

}

