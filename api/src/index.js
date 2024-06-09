const express = require('express');
const connectToDatabase = require('./connection');

const port = 3000;
const app = express();

app.get('/liveness', (req, res) => {
    res.send('API está disponível');
});

app.get('/readiness', async (req, res) => {
    try {
        const connection = await connectToDatabase();
        await connection.query('SELECT 1');
        res.status(200).json({ status: 'ready' });
        connection.release();
    } catch (error) {
        console.error('Erro ao verificar a disponibilidade do banco de dados:', error);
        res.status(500).send('Erro ao verificar a disponibilidade do banco de dados');
    }
});

app.get('/wallets', async (req, res) => {
    try {
        const connection = await connectToDatabase(); // Conecta ao banco de dados
        const [rows] = await connection.query('SELECT * FROM bitcoin_wallets'); // Executa a consulta
        res.status(200).json(rows); // Retorna os resultados da consulta
        connection.release(); // Libera a conexão
    } catch (error) {
        console.error('Erro ao buscar os dados das carteiras:', error);
        res.status(500).send('Erro ao buscar os dados das carteiras');
    }
});


app.listen(port, '0.0.0.0', () => {
    console.log('Servidor rodando na porta: ' + port);
});
