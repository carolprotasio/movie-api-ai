# Movie API AI

## 🚀 Sobre o Projeto

Este projeto é uma API RESTful para um sistema de cadastro e gerenciamento de filmes, criada com a ajuda de inteligência artificial. A API oferece operações de CRUD (Create, Read, Update e Delete) para usuários e filmes, permitindo que os usuários se registrem, façam login e gerenciem seus próprios catálogos de filmes.

Organização do Código
O projeto está estruturado de forma modular, seguindo boas práticas de desenvolvimento. Os principais componentes da API estão organizados em diretórios que facilitam a manutenção e evolução do sistema:

Routes: As rotas da API são definidas utilizando o Express.js, separando claramente os endpoints de usuários e filmes.
Controllers: A lógica de negócios e manipulação de dados está encapsulada nos controllers, permitindo uma separação entre o código de roteamento e as operações sobre os dados.
Models: Utiliza o Mongoose para a definição dos modelos de dados, permitindo uma integração eficiente com o MongoDB.
Middleware: Inclui middlewares para autenticação de usuários utilizando JSON Web Tokens (JWT), garantindo que apenas usuários autenticados possam acessar determinadas rotas.
Tests: Os testes estão bem organizados, com Cypress sendo usado para cobrir os principais cenários de uso da API, desde o registro de usuários até o CRUD completo dos filmes.
A organização modular torna o código mais legível e fácil de escalar. A integração de testes automatizados com Cypress permite uma abordagem de desenvolvimento orientada a testes (TDD), garantindo a qualidade e a confiabilidade da API.

Essa organização modular não apenas torna o código mais legível, mas também facilita sua escalabilidade. A integração de testes automatizados com Cypress promove uma abordagem de desenvolvimento orientada a testes (TDD), garantindo a qualidade e a confiabilidade da API ao longo do tempo.

## 🛠 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução do JavaScript para o backend.
- **JavaScript** - Linguagem de programação utilizada em todo o projeto.
- **Express.js** - Framework utilizado para criar as rotas e gerenciar requisições HTTP.
- **MongoDB** - Banco de dados NoSQL utilizado para armazenar informações de usuários e filmes.
- **Mongoose** - ODM (Object Data Modeling) para facilitar as operações no MongoDB.
- **Cypress** - Ferramenta de teste end-to-end utilizada para automatizar os testes da API
- **Postman** - Usado para realizar testes manuais da API.

<img src="https://github.com/carolprotasio/movie-api-ai/blob/main/assets/postman.png" alt="web" width="800"/>


## 🤖 Prompt Utilizado com AI

O projeto foi gerado utilizando o seguinte prompt de AI:

```txt
Crie uma API RESTful em Node.js para um sistema de cadastro de filmes. A API deve incluir as seguintes funcionalidades:
- Cadastro de usuário: Permita que os usuários se cadastrem, informando name / email / password - Todos os campos são obrigatórios.
- Login de usuário: Permita que os usuários cadastrados façam o login informando email / password - Todos os campos são obrigatórios.
- Cadastro de filmes por usuários cadastrados: Permita que os usuários cadastrem filmes informando title, director, year, genre, e description - Todos os campos são obrigatórios.
- Listagem de filmes: Implemente um endpoint para listar todos os filmes cadastrados, retornando todas as informações dos filmes.
- Consulta de filme por ID: Crie um endpoint que permita consultar um filme específico usando seu ID.
- Atualização de filme por ID: Crie um endpoint que permita alterar informações de um filme específico usando seu ID.
- Remoção de filme: Implemente um endpoint para deletar um filme do sistema utilizando seu ID.
- Banco de Dados: Utilize o MongoDB como banco de dados.

Requisitos técnicos:
- Utilize Express.js para gerenciar as rotas da API.
- Use Mongoose para a modelagem dos dados e integração com o MongoDB.
- Inclua tratamento de erros e validações adequadas para todos os endpoints.
- Adicione comentários no código para explicar as principais partes da implementação.
```
## 🧪 Testando a API com Cypress
Os testes automatizados foram feitos usando Cypress, garantindo que os principais fluxos da API funcionem corretamente. Os testes cobrem os cenários de cadastro de usuário, login, CRUD de filmes e validações de dados.

<img src="https://github.com/carolprotasio/movie-api-ai/blob/main/assets/cli.png" alt="web" width="800"/>

# 🔍 Cenários e Casos de Teste

## CRUD / movie

### Caso de Teste 1 (CT-001): Deve permitir a criação de um filme
**Ação**: Registrar um novo usuário com dados válidos, realizar login e, em seguida, tentar criar um novo filme.  
**Resultado Esperado**: O filme deve ser criado com sucesso, e as informações devem corresponder aos dados fornecidos.

### Caso de Teste 2 (CT-002): Deve permitir obter um filme pelo ID
**Ação**: Registrar um novo usuário, realizar login, criar um novo filme e, em seguida, tentar obter o filme pelo seu ID.  
**Resultado Esperado**: O filme deve ser retornado com sucesso e suas informações devem corresponder ao filme criado.

### Caso de Teste 3 (CT-003): Deve permitir obter todos os filmes
**Ação**: Registrar um novo usuário, realizar login e criar dois filmes. Depois, tentar obter todos os filmes cadastrados.  
**Resultado Esperado**: A lista de filmes deve ser retornada com sucesso.

### Caso de Teste 4 (CT-004): Deve permitir atualizar a descrição de um filme
**Ação**: Registrar um novo usuário, realizar login, criar um filme e, em seguida, atualizar a descrição desse filme.  
**Resultado Esperado**: A descrição do filme deve ser atualizada com sucesso e refletir a nova descrição.

### Caso de Teste 5 (CT-005): Deve permitir deletar um filme pelo ID
**Ação**: Registrar um novo usuário, realizar login, criar um filme e, em seguida, deletar esse filme pelo ID.  
**Resultado Esperado**: O filme deve ser deletado com sucesso e uma confirmação deve ser retornada.


<img src="https://github.com/carolprotasio/movie-api-ai/blob/main/assets/movie_crud.png" alt="web" width="800"/>

---

## /movie - funcionalidade

### Caso de Teste 1 (CT-001): Deve permitir a criação de um filme com sucesso
**Ação**: Registrar um novo usuário com dados válidos, realizar login e tentar criar um novo filme.  
**Resultado Esperado**: O filme deve ser criado com sucesso, e as informações devem corresponder aos dados fornecidos.

## - Campos obrigatório
  
### Caso de Teste 2 (CT-002): O título é obrigatório
**Ação**: Registrar um novo usuário, realizar login e tentar criar um filme sem o título.  
**Resultado Esperado**: A resposta deve indicar que o título é obrigatório.

### Caso de Teste 3 (CT-003): O diretor é obrigatório
**Ação**: Registrar um novo usuário, realizar login e tentar criar um filme sem o diretor.  
**Resultado Esperado**: A resposta deve indicar que o diretor é obrigatório.

### Caso de Teste 4 (CT-004): O ano é obrigatório
**Ação**: Registrar um novo usuário, realizar login e tentar criar um filme sem o ano.  
**Resultado Esperado**: A resposta deve indicar que o ano é obrigatório.

### Caso de Teste 5 (CT-005): O gênero é obrigatório
**Ação**: Registrar um novo usuário, realizar login e tentar criar um filme sem o gênero.  
**Resultado Esperado**: A resposta deve indicar que o gênero é obrigatório.

### Caso de Teste 6 (CT-006): A descrição é obrigatória
**Ação**: Registrar um novo usuário, realizar login e tentar criar um filme sem a descrição.  
**Resultado Esperado**: A resposta deve indicar que a descrição é obrigatória.

### Caso de Teste 7 (CT-007): Todos os campos vazios
**Ação**: Registrar um novo usuário, realizar login e tentar criar um filme com todos os campos vazios.  
**Resultado Esperado**: A resposta deve indicar que todos os campos são obrigatórios.

<img src="https://github.com/carolprotasio/movie-api-ai/blob/main/assets/movie.png" alt="web" width="800"/>

---

## Login / user - Funcionalidade de Login

### Caso de Teste 1 (CT-001): Deve permitir login com sucesso
**Ação**: Registrar um novo usuário com dados válidos e, em seguida, tentar realizar o login.  
**Resultado Esperado**: O login deve ser bem-sucedido e um token deve ser retornado.

### Caso de Teste 2 (CT-002): Não deve permitir login com senha inválida
**Ação**: Tentar realizar o login com um usuário que possui uma senha inválida.  
**Resultado Esperado**: A resposta deve indicar erro 401 e a mensagem "Email ou senha inválidos".

### Caso de Teste 3 (CT-003): Não deve permitir login com email inválido
**Ação**: Tentar realizar o login com um usuário que possui um email inválido.  
**Resultado Esperado**: A resposta deve indicar erro 401 e a mensagem "Email ou senha inválidos".

## Casos de Teste - Campos Obrigatórios

### Caso de Teste 4 (CT-004): O nome é obrigatório
**Ação**: Tentar registrar um usuário sem fornecer o nome.  
**Resultado Esperado**: A resposta deve indicar erro 400 e a mensagem "Nome é obrigatório".

### Caso de Teste 5 (CT-005): O email é obrigatório
**Ação**: Tentar registrar um usuário sem fornecer o email.  
**Resultado Esperado**: A resposta deve indicar erro 400 e a mensagem "Email é obrigatório".

### Caso de Teste 6 (CT-006): A senha é obrigatória
**Ação**: Tentar registrar um usuário sem fornecer a senha.  
**Resultado Esperado**: A resposta deve indicar erro 400 e a mensagem "Senha é obrigatória".

<img src="https://github.com/carolprotasio/movie-api-ai/blob/main/assets/login.png" alt="web" width="800"/>

---

##  /register - Funcionalidade de Registro

### Caso de Teste 1 (CT-001): Deve criar um novo usuário
**Ação**: Tentar registrar um novo usuário com dados válidos.  
**Resultado Esperado**: O usuário deve ser criado com sucesso e a mensagem "Usuário registrado com sucesso" deve ser retornada.

### Caso de Teste 2 (CT-002): Não deve permitir a criação de um usuário com email duplicado
**Ação**: Registrar um usuário e, em seguida, tentar registrar o mesmo usuário novamente.  
**Resultado Esperado**: A resposta deve indicar erro 409 e a mensagem "Email já existe. Por favor, use um email diferente."

## Casos de Teste - Campos Obrigatórios

### Caso de Teste 3 (CT-003): O nome é obrigatório
**Ação**: Tentar registrar um usuário sem fornecer o nome.  
**Resultado Esperado**: A resposta deve indicar erro 400 e a mensagem "Nome é obrigatório".

### Caso de Teste 4 (CT-004): O email é obrigatório
**Ação**: Tentar registrar um usuário sem fornecer o email.  
**Resultado Esperado**: A resposta deve indicar erro 400 e a mensagem "Email é obrigatório".

### Caso de Teste 5 (CT-005): A senha é obrigatória
**Ação**: Tentar registrar um usuário sem fornecer a senha.  
**Resultado Esperado**: A resposta deve indicar erro 400 e a mensagem "Senha é obrigatória".

<img src="https://github.com/carolprotasio/movie-api-ai/blob/main/assets/register.png" alt="web" width="800"/>

---

## /user - Funcionalidade CRUD de Usuários

### Caso de Teste 1 (CT-001): Deve permitir o login de um usuário registrado
**Ação**: Registrar um novo usuário e, em seguida, tentar realizar o login com os mesmos dados.  
**Resultado Esperado**: O usuário deve ser autenticado com sucesso e receber um token de acesso.

### Caso de Teste 2 (CT-002): Deve retornar um usuário pelo ID
**Ação**: Registrar um novo usuário e, em seguida, buscar o usuário pelo seu ID.  
**Resultado Esperado**: A resposta deve conter os dados do usuário, incluindo nome e email.

### Caso de Teste 3 (CT-003): Deve retornar todos os usuários
**Ação**: Registrar um novo usuário e, em seguida, solicitar a lista de todos os usuários.  
**Resultado Esperado**: A resposta deve retornar todos os usuários com status 200.

### Caso de Teste 4 (CT-004): Deve atualizar os dados de um usuário pelo ID
**Ação**: Registrar um novo usuário e, em seguida, atualizar seus dados pelo ID.  
**Resultado Esperado**: A resposta deve indicar que o usuário foi atualizado com sucesso e retornar os novos dados do usuário.

### Caso de Teste 5 (CT-005): Deve deletar um usuário pelo ID
**Ação**: Registrar um novo usuário e, em seguida, deletar o usuário pelo ID.  
**Resultado Esperado**: A resposta deve indicar que o usuário foi deletado com sucesso.

<img src="https://github.com/carolprotasio/movie-api-ai/blob/main/assets/user_crud.png" alt="web" width="800"/>

---

# ✅ Conclusão
Este projeto demonstrou como podemos usar ferramentas modernas como Node.js, MongoDB e Cypress para construir e testar uma API RESTful. A integração de inteligência artificial na fase de concepção ajudou a criar um sistema flexível, que pode ser expandido para incluir mais funcionalidades no futuro.

O uso de Cypress permitiu automatizar os testes, garantindo que as principais operações da API funcionem corretamente, e os testes contínuos ajudam a prevenir regressões à medida que o projeto evolui.

