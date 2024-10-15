const { generateCPF } = require('../services/cpfService');
const gerarCPFHandler = (req, res) => {
    const cpf = generateCPF();
    res.status(200).json({ cpf });
};
module.exports = { gerarCPFHandler };
