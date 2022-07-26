<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descrição

API em NestJs para criação e edição de lembretes. Possui autenticação simples(MongoDB) e token JWT.

## Uso e Funções

- Iniciar a API
```bash
# início padrão
$ npm run start

# watch mode
$ npm run start:dev
```
- Funções
1. Autenticação

  POST request passando login e senha como parâmetros. Caso o usuário seja identificado no banco, será devolvido o token JWT, do tipo Bearer, que será usado para ter acesso às outras interfaces.
  ![alt text](https://dickboon.sirv.com/Images/login.PNG)
  
2. Lembretes e Usuários

  Abaixo seguirão exemplos das requisições que podem ser feitas, tanto para os lembretes, quanto para os usuários. As funções são: listagem geral, listagem individual, criação, edição e remoção (CRUD). Os exemplos a seguir serão dos Lembretes, porém é possível usar as mesmas funções para Usuários, alterando a url /reminders para /users.

** Em todas as requests, é necessário o uso do Bearer Token gerado anteriormente.

- Listar Todos
  GET request para a raiz dos lembretes, é devolvida uma lista com todos os lembretes em banco de dados.
  
  ![alt text](https://dickboon.sirv.com/Images/list%20all%20reminders.PNG)

- Listar por id
  GET request passando o id do lembrete desejado, são devolvidos todos os campos do lembrete.
  
  ![alt text](https://dickboon.sirv.com/Images/list%20reminder%20by%20id.PNG)
  
- Criar
  POST request passando como parâmetros os campos a serem criados, são devolvidos os campos criados, juntamente com o id.
  
  ![alt text](https://dickboon.sirv.com/Images/create%20reminder.PNG)
  
- Editar
  PUT request passando como parâmetros os campos a serem alterados, são devolvidos todos os campos em banco do lembrete alterado.
  
  ![alt text](https://dickboon.sirv.com/Images/update%20reminder.PNG)
 
- Excluir
  DELETE request passando o id do lembrete a ser excluído, é devolvida uma mensagem de sucesso.
  
  ![alt text](https://dickboon.sirv.com/Images/delete%20with%20token.PNG)

** Caso algum request seja feita sem o token, retornará status 401 "Unauthorized". eg:

  ![alt text](https://dickboon.sirv.com/Images/delete%20without%20jwt%20token.PNG)
