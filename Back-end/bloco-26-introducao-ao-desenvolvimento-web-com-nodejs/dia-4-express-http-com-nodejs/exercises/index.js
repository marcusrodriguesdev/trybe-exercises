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


//  Exercise 3
const createApiGreetings = (req, res) => {
  const { name, age } = req.body;
  const message1 = {
    message: `Hello, ${name}!`,
  };
  const message2 = {
    message: 'Unauthorized',
  };

  if (parseInt(age, 10) <= 17) return res.status(401).json(message2);

  res.status(200).json(message1);
}
app.post('/greetings', createApiGreetings);


// Exercise 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ 'message': `Seu nome e ${name} e voce tem ${age} anos de idade` });
});
