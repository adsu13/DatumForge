function generateRg(estado, pontuacao = true) {
    const estadosValidos = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    if (!estado || !estadosValidos.includes(estado.toUpperCase())) {
        estado = estadosValidos[Math.floor(Math.random() * estadosValidos.length)];
    }

    let rg = '';
    for (let i = 0; i < 8; i++) {
        rg += Math.floor(Math.random() * 10);
    }
    const dv = calcularDigitoVerificador(rg);
    if (pontuacao) {
        rg = rg.slice(0, 2) + '.' + rg.slice(2, 5) + '.' + rg.slice(5, 8) + '-' + dv;
    } else {
        rg = rg + dv;
    }

    return rg;
}

function calcularDigitoVerificador(rg) {
    let soma = 0;
    let multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < rg.length; i++) {
        soma += parseInt(rg[i]) * multiplicadores[i];
    }

    let resto = soma % 11;
    if (resto === 10) {
        return 'X';
    } else {
        return resto.toString();
    }
}

module.exports = { generateRg };
