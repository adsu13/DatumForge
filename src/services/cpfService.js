function generateCpf(pontuacao = true) { 
    const cpf = [];
    let sum = 0, rest;
    for (let i = 0; i < 9; i++) {
        cpf[i] = Math.floor(Math.random() * 10);
    }
    sum = cpf.slice(0, 9).reduce((acc, curr, index) => acc + curr * (10 - index), 0);
    rest = sum % 11;
    cpf[9] = rest < 2 ? 0 : 11 - rest;
    sum = cpf.slice(0, 10).reduce((acc, curr, index) => acc + curr * (11 - index), 0);
    rest = sum % 11;
    cpf[10] = rest < 2 ? 0 : 11 - rest;
    let cpfString = cpf.join('');
    if (pontuacao) {
        cpfString = cpfString.slice(0, 3) + '.' + cpfString.slice(3, 6) + '.' + cpfString.slice(6, 9) + '-' + cpfString.slice(9);
    }
    return cpfString;
}
module.exports = { generateCpf };