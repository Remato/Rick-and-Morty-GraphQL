![Platform_Builders](https://www.the-arcade.ie/wp-content/uploads/2019/01/Rick-and-Morty-On-Channel-4-Header.jpg)
# Rick and Morty GraphQL API
### Front end desenvolvido ao consumir a API GraphQL:

  https://rickandmortyapi.com/

## Breve Descrição
**App:** ao ser iniciado mostra na tela uma lista de episodios, ao clicar no botão "Show characters and locals" será redirecionado para uma página que contém os personagens e os locais para que se possa criar um novo episódio. Eles são adicionados numa lista e quando o usuário desejar ele pode clicar em "Create a new episode".
## Documentação :page_facing_up:

  ### Resolvers **/src/graphql/RickAndMorty.ts**

  > **Schema de leitura dos personagens**
  ```graphql
    query readCharacters($page: Int) {
      characters(page: $page) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          image
          gender
          status
          species
        }
      }
    }
  ```

  > **Schema de leitura dos locais**

  ```graphql
    query readLocations($page: Int) {
      locations(page: $page) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          type
          dimension
        }
      }
    }
  ```

  ### Requests

  > **Função que retorna os primeiros personagens**
  ```ts
  const [getCharacters, { data: characters }] = useLazyQuery<CharacterResponse>(
    READ_CHARACTERS,
    {
      variables: { page: 1 },
    }
  );
  ```

  > **Função que retorna os primeiros locais**
  ```ts
  const [getLocations, { data: locations }] = useLazyQuery<LocationResponse>(
    READ_LOCATIONS,
    {
      variables: { page: 1 },
    },
  );
  ```
## Primeira Execução da aplicação :video_camera:
## Inicialização :octocat:

[0] - **Clonando repositório**
```bash
git clone https://github.com/Remato/Rick-and-Morty-GraphQL
```

[1] - **Inicializando**

  ```bash
  yarn && yarn start
  ```

[3] - **Acesso em http://localhost:3000**
