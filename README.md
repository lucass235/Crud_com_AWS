# Semana_da_computação_2023.1

AWS micro serviço

## Criação do lambda

### Definição da função IAM

- crie uma função IAM com o acesso ao dynamoDB

1. Caso de uso = Lambda

2. Adicionar permissão = DynamoDB Full Access

3. Adicionar permissão ao api gateway = API Gateway Invoke Access

4. Nome da função = register e descrição se quiser

5. Clique em criar função

### Criação do DynamoDB

1. Clique em criar tabela

2. Nome da tabela = users

3. Chave primária = id

4. Configuração da tabela = Configuração padrão

### Crie uma função lambda

1. Nome da função = user_register

2. Runtime = Python 3.9

3. Arquitetura = x86_64

4. Papel de execução = Usa uma função existente (selecione a função criada anteriormente register)

5. Clique em criar função

6. Clique em criar

## Criação do API Gateway

1. Clique em criar API

2. API = REST

3. Nome da API = user_register_api

4. Tipo de terminal = Regional

5. Criar metodo = GET

6. Tipo de integração = Lambda Function

7. Região = us-east-1

8. Função = user_register

9. Clique em salvar

10. ações = Deploy API
