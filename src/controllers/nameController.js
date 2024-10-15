const { generateName } = require('../services/nameService');
const generateNameHandler = (req, res) => {
    const gender = req.query.gender; 
    try {
        const name = generateName(gender);
        res.status(200).json({ name: name });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { generateNameHandler };
