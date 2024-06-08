FROM node:16-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /home/node/app

# Copia os arquivos do projeto para dentro do contêiner
COPY package.json ./
COPY src ./src

# Instala as dependências da aplicação
RUN npm install

# Define o comando para iniciar a aplicação
CMD npm start