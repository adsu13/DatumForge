const express = require('express');
const { gerarCPFHandler } = require('../src/controllers/cpfController');
const { generateNameHandler } = require('../src/controllers/nameController');
const { generateRgHandler } = require('../src/controllers/rgController');
const router = express.Router();
router.get('/generateCpf', gerarCPFHandler);
router.get('/generateName', generateNameHandler);
router.get('/generateRg', generateRgHandler);
module.exports = router;
