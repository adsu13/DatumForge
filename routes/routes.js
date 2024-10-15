const express = require('express');
const { gerarCPFHandler } = require('../src/controllers/cpfController');
const { generateNameHandler } = require('../src/controllers/nameController'); // Verifique este caminho e nome da função
const router = express.Router();
router.get('/generateCpf', gerarCPFHandler);
router.get('/generateName', generateNameHandler);
module.exports = router;
