
CREATE DATABASE IF NOT EXISTS
 atividade4;

USE atividade4

CREATE TABLE bitcoin_wallets (
    wallet_id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_address VARCHAR(255) NOT NULL UNIQUE,
    balance DECIMAL(20, 8) DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 0.5);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy', 1.23456789);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64', 0.98765432);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY', 5.67891234);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC', 0.00012345);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('1A8JiWcwvpY7tAopUkSnGuEYHmzGYfZPiq', 2.34567891);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('3CMCRgEm8HVz3DrWaCCid3vAANE42jcEv9', 3.14159265);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp', 0.99999999);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('3H6Sa7yYdBy8pWNerMy7YqGzXQY4aYNrPi', 10.00000000);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('1CounterpartyXXXXXXXXXXXXXXXUWLpVr', 0.12345678);
INSERT INTO bitcoin_wallets (wallet_address, balance) VALUES ('3JvL6Ymt8MVWiCNHC7oWU6nLeHNJKLZGLN', 8.76543210);