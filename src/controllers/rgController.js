const { generateRg } = require('../services/rgService');

const generateRgHandler = (req, res) => {
    const estado = req.query.estado;
    const pontuacao = req.query.pontuacao ? req.query.pontuacao === 'true' : true; // Se 'pontuacao' não for passado, assume 'true'
    try {
        const rg = generateRg(estado, pontuacao); 
        res.status(200).json({ rg: rg });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { generateRgHandler };
