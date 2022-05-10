# NlwFeedback

Este é um projeto desenvolvido no NLW da <a href="https://www.rocketseat.com.br/">RocketSeat</a>

Consiste em uma API que recebe como entrada um objeto feedback na entrada com 
```
{    
  type: string;
  comment: string;
  screenshot?: string;
}
```
onde o type pode ser: BUG | IDEA | OTHER, 
envia uma mensagem para o email especificado em NlwFeedback/src/adapters/nodemailer/nodemailer-mail-adapter.ts e armazena em banco.

A api possui somente uma rota do tipo POST que é /feedbacks.

Para rodar o projeto em sua maquina, clone o repositorio, crie um arquivo .env na pasta raizcom a variavel DATABASE_URL, onde ficará a string de conexão para o seu banco de dados. Em NlwFeedback/prisma/schema.prisma você podera alterar o tipo de banco do seu projeto, lembrandoque se alterar o provider terá que criar uma nova migration. após isso rode npm install para instalar as dependências e npm start, onde ele irá sincronizar o banco de dados e iniciar o projeto.

OBS: utilize o NodeJs na versão 16.15.0 para não ter problemas de compatibilidade.
