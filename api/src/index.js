const express = require('express');
const mysql = require('mysql');

const port = 3000;
const app = express();
const connection = createConnection();
// Função para criar uma nova conexão com o banco de dados
function createConnection() {
    return mysql.createConnection({
        host: 'mysql-container',
        user: 'root',
        password: '123as321',
        database: 'atividade4',
        authPlugin: 'mysql_clear_password'
    });
}


// Endpoint de liveness
app.get('/liveness', (req, res) => {
    res.send('API está disponível');
});

// Endpoint de readiness
app.get('/readiness', (req, res) => {
    

    connection.query('SELECT * FROM bitcoin_wallets', (error, results) => {
        if (error) {
            console.error('Erro ao verificar a disponibilidade do banco de dados:', error);
            res.status(500).send('Erro ao verificar a disponibilidade do banco de dados');
            return;
        }
        res.send('API está pronta para uso');
    });
});

app.get('/wallets', async (req, res) => {
   
    try {
        connection.connect(); // Abrir a conexão com o banco de dados

        const sql = "SELECT * FROM bitcoin_wallets";
        connection.query(sql, (error, results) => {
            if (error) {
                console.error('Erro ao executar a consulta:', error);
                res.status(500).send('Erro ao buscar dados');
                return;
            }
            res.send(results.map(item => ({ wallet_address: item.wallet_address, balance: item.balance })));
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    } finally {
        connection.end(); // Fechar a conexão após a consulta
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor rodando na porta: ' + port);
});