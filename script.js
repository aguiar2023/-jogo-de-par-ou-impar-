function jogar() {
    const escolhaJogador = parseInt(document.getElementById('escolhaJogador').value);
    const escolhaComputador = Math.floor(Math.random() * 9) + 1;
    const soma = escolhaJogador + escolhaComputador;

    const parImparJogador = escolhaJogador % 2 === 0 ? "par" : "ímpar";
    const parImparComputador = escolhaComputador % 2 === 0 ? "par" : "ímpar";

    const resultado = (soma % 2 === 0 && escolhaJogador === "par") ||
                     (soma % 2 !== 0 && escolhaJogador === "ímpar") ? "Você venceu!" : "Você perdeu!";

    document.getElementById('resultado').innerHTML = `
        <p>Você escolheu ${parImparJogador} e digitou ${escolhaJogador}.</p>
        <p>O computador escolheu ${parImparComputador} e digitou ${escolhaComputador}.</p>
        <p>Soma: ${soma}</p>
        <p>Resultado: ${resultado}</p>
    `;
}
