function verificarDesempenho() {
    // Obter valores dos campos de acertos e erros
    var acertos = parseInt(document.getElementById('acertos').value);
    var erros = parseInt(document.getElementById('erros').value);

    // Calcular a porcentagem de acertos
    var porcentagemAcertos = (acertos / (acertos + erros)) * 100;

    // Verificar se deve repetir os exercícios
    if (porcentagemAcertos < 90) {
        alert('Você deve repetir os exercícios. Sua porcentagem de acertos é inferior a 90%.');
    } else {
        alert('Parabéns! Você pode prosseguir para a próxima etapa.');
    }
}