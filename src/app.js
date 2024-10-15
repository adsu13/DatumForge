require('dotenv').config();
const express = require('express');
const Routes = require('../routes/routes');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', Routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});