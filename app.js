// Lista começa vazia
let amigos = [];
let sorteioFeito = false; // controla se já houve sorteio

// Atualiza a lista de amigos no HTML
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Adiciona um novo amigo na lista
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Se já houve sorteio, limpa o resultado
    if (sorteioFeito) {
        document.getElementById("resultado").textContent = "";
        sorteioFeito = false;
    }

    amigos.push(nome);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

// Sorteia um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").textContent =
        "O amigo secreto sorteado é " + sorteado;

    amigos = []; // limpa a lista após o sorteio
    atualizarLista();
    sorteioFeito = true;
}

// Inicializa lista na tela
atualizarLista();
