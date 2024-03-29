# Cadastro de clientes utilizando AWS

## Descrição

Este projeto tem como objetivo criar uma API REST para cadastro de clientes utilizando AWS Lambda, DynamoDB e API Gateway.

1. Neste projeto, foi utilizado o padrão de projeto como o Clean Architecture e organização de código em responsabilidades de acordo com o SOLID.

2. Nele podemos criar, listar, atualizar e deletar clientes. Utilizamos os atributos ID (CPF), userName, email e age para cadastro de clientes.

3. Foi utilizado alguns padrões de validação de dados, como por exemplo, o email e o CPF (ID) deve ser válido.

4. Validações de cadastros duplicados, onde não é permitido cadastrar um cliente com o mesmo CPF (ID), valendo essa regra também para os outros métodos.

5. Regras também do body da requisição onde é obrigatório o preenchimento de todos os campos.

6. Configuração de segurança para a API, onde é necessário passar um token válido para acessar os métodos POST, PUT e DELETE.

7. Foi utilizado o DynamoDB para armazenamento dos dados, onde foi criado uma tabela com o nome de "users".

8. A API Gateway para expor a API REST.

9. E o Lambda para criar as funções que serão executadas quando a API for chamada.

10. Foi implementados testes unitários para validar as requisições e respostas da API.

11. Testes unitários utilizando o pytest.

12. Foi feito a integração contínua utilizando o Github Actions onde é executado os testes unitários implementados.

- Mais detalhes sobre a implementação do projeto, acesse o arquivo [README.md](./user_register/README.md).

## Tecnologias utilizadas

- [AWS Lambda](https://aws.amazon.com/pt/lambda/)
- [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)
- [Python](https://www.python.org/)
- [Pytest](https://docs.pytest.org/en/stable/)
- [Github Actions](https://github.com/features/actions)
- [Unittest](https://docs.python.org/3/library/unittest.html)

## Diagrama

![Diagrama](./backend/diagrama/Diagrama_crud_aws.png)

## Video de demonstração

https://github.com/lucass235/Crud_com_AWS/assets/64389529/599806ae-2071-4fc3-b9ae-319e4514c20c


