Teste Full-Stack Nex Digital

Validação do Teste

Este arquivo contém as instruções passo a passo para validar o teste no ambiente de back-end.

Validação do Back-End

Siga as etapas abaixo para validar o teste no ambiente de back-end:

1. Abra o terminal.

2. No terminal, execute o comando 'npm i' para instalar as dependências.

3. Certifique-se de ter o Docker instalado em seu computador.

4. Abra o Docker em seu computador.

5. No terminal, execute o comando 'docker ps'.

6. No terminal, execute o seguinte comando para executar uma instância do PostgreSQL em um contêiner Docker: 'docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres' .

7. No PostgreSQL:
    Host: localhost
    Porta: 5432
    Nome de usuário: postgres
    Senha: postgres

    Crie um banco de dados chamado "nex-digital".

8. No terminal, execute o comando 'npx sequelize-cli db:migrate' para executar as migrações do banco de dados.

9. No terminal, execute o comando 'npx sequelize-cli db:seed:all' para popular o banco de dados com dados de exemplo.

10. No terminal, execute o comando 'npm run dev' para iniciar o servidor back-end.