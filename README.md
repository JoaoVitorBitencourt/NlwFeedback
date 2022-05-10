# NlwFeedback

Este é um projeto desenvolvido no NLW da <a href="https://www.rocketseat.com.br/">RocketSeat</a>

Consiste em uma API que recebe como entrada um objeto feedback na entrada com 
{    
  type: string;
  comment: string;
  screenshot?: string;
}
e armazena em banco.

Para rodar o projeto em sua maquina, clone o repositorio, crie um arquivo .env na pasta raiz
com a variavel DATABASE_URL, onde ficará a string de conexão para o seu banco de dados.
em NlwFeedback/prisma/schema.prisma você podera alterar o tipo de banco do seu projeto, lembrando
que se alterar o provider terá que criar uma nova migration.
após isso rode npm install para instalar as dependências e npm start, onde ele irá sincronizar o banco de dados
e iniciar o projeto.

OBS: utilize o NodeJs na versão 16.15.0 para não ter problemas de compatibilidade.
