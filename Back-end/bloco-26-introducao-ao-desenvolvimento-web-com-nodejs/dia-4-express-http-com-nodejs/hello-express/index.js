const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const orderName = drinks.sort((a, b) => {
  if (a.name > b.name) return -1;
});

const createFirstApi = (req, res) => {
  const { id, name, price, } = req.body;
  drinks.push({ price, name, id });
  res.status(201).json({ message: 'Recipe created sucessfully!' });
}

app.post('/drinks', createFirstApi);

app.listen(3001, () => {
  console.log('Rodando na porta 3001');
});
