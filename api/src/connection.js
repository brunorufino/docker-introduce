const mysql = require('mysql2/promise');

async function connectToDatabase() {
    if (global.connectionPool) {
        return await global.connectionPool.getConnection();
    } else {
        const pool = mysql.createPool({
            host: 'mysql-container', // Nome do serviço do contêiner MySQL
            user: 'root',
            password: '123as321',
            database: 'atividade4',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10,
            idleTimeout: 60000,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        });

        global.connectionPool = pool;
        return await pool.getConnection();
    }
}

module.exports = connectToDatabase;