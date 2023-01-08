import express from 'express';
import usersRoute from './routes/Users.route';

// Configuração do servidor
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração das rotas
app.use(usersRoute);

// Inicialização do servidor
const port = 44390;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));