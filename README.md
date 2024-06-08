<h1>Instruções iniciais:</h1>


Comandos Utilizados no PowserShell

Executar container para executar o container e salvar a execução dos scripts

docker run -d -v ${PWD}/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image


Comando para executar script SQL 
Get-Content ./api/db/scripts.sql | docker exec -i mysql-container mysql -u root -p123as321


Criando imagem da API

docker build -t node-image -f api/Dockerfile

Executando a imagem e acessando uma rota fora do container especificando a porta 3000 acessando outro container na porta 3000

docker run -d -v ${PWD}/api:/home/nome/app -p 3000:3000 --rm --name node-container node-image



#### Criando uma rede entre os containers 

docker network create my-network


Iniciar o Contêiner MySQL (se ainda não estiver rodando):

docker run -d --network my-network --name mysql-container -v "$(pwd)/api/db/data:/var/lib/mysql" mysql-image

Iniciar o Contêiner Node.js:

docker run -d --network my-network -p 3000:3000 --name node-container node-image


docker exec -it mysql-container mysql -u root -p atividade4






