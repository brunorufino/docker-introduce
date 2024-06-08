import mysql from 'mysql2/promise';

export default async function conectar(){
    if(global.poolConexoes){
        return await global.poolConexoes.getConnection();

    }
    else{
        const pool = mysql.createPool({
            host: 'mysql-container', 
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

          global.poolConexoes = pool;
          return await pool.getConnection();
        
    }
}