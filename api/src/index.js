const express = require('express');
const mysql = require('mysql');
const port = 3000;
const app = express();

const connection = mysql.createConnection({
    host: 'mysql-container', // Nome do contêiner MySQL
    user: 'root',
    password: '123as321',
    database: 'atividade4'
});

// Adicione um log para verificar se a conexão está sendo estabelecida corretamente
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

app.get('/wallets', (req, res) => {
    connection.query('SELECT * FROM bitcoin_wallets', (error, results) => {
        if (error) {
            console.error('Erro ao executar a consulta:', error);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(results.map(item => ({wallet_address: item.wallet_address, balance: item.balance})));
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor rodando na porta: ' + port);
});