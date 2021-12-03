const express = require('express');
const app = express();
app.listen(3001, () => {
  console.log('Aplicacao rodando na porta 3001');
});


// Exercise 1
const createApiPing = (req, res) => {
  res.status(200).json({ message: 'pong' })
}
app.get('/ping', createApiPing);


// Exercise 2
const createApiHello = (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` })
}
app.post('/hello', createApiHello);


