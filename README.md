## Descrição

Implementação do teste para Biox: Uma api em Node+NestJS que utiliza princípios de Clean Architecture e DDD.

A pasta `src` tem as seguintes camadas:

- `application`: contem os UseCases de `Recipe`: 
  - `CreateRecipeUseCase`
  - `GetAllRecipesUseCase`
  - `GetRecipeByIdUseCase` (inclui teste unitário)
- `domain`: contém a entidade `Recipe` e o respectivo repositório, uma interface.
- `infrastructure`: contém a implementação do repositório de Recipe, `RecipeRepositoryInMemory` 
- `presentation`: camada de apresentação para `HTTP`:
  - `controllers`
  - `dtos`
  - `presenters`

## Como rodar

## Docker

Uma configuração simples de Docker foi feita para executar o projeto simulando um ambiente de produção. Basta rodar:

```bash
docker compose up --build
```

### Localmente

Para rodar localmente, em ambiente de desenvolvimento ou não, basta seguir o padrão do `NestJS`:

Instalar as dependências:
```bash
 yarn install
```

Rodar o projeto:

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Rodar testes

```bash
# unit tests
$ yarn run test
```