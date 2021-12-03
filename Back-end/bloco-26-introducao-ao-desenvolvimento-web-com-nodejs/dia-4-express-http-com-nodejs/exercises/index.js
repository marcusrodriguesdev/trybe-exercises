const express = require('express');
const app = express();


// Exercise 1
const createApiPing = (req, res) => {
  res.status(200).json({ message: 'pong' })
}

app.get('/ping', createApiPing);

app.listen(3001, () => {
  console.log('Aplicacao rodando na porta 3001');
});

