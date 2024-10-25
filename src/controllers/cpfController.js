const { generateCpf } = require('../services/cpfService');

const gerarCPFHandler = (req, res) => {
    const pontuacao = req.query.pontuacao === 'false' ? false : true;
    try {
        const cpf = generateCpf(pontuacao); 
        res.status(200).json({ cpf: cpf });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { gerarCPFHandler };
