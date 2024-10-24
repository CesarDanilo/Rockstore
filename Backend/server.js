const express = require('express');
const app = express();
const port = 3001;
const rotas = require('./routes');
const cors = require('cors');
const session = require('express-session');


// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/', rotas);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`);
});
