import React, { useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import {
  READ_CHARACTERS,
  READ_LOCATIONS,
} from '../../graphql/RickAndMortyResolvers';

import {
  Container,
  Menu,
  Header,
  Footer,
  Divider,
  Content,
  Character,
  CharacterInfo,
  Avatar,
  Location,
  LocationInfo,
  Button,
  ShowEpisodes,
  SubmitButton,
} from './styles';

interface CharacterResults {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
}

interface CharacterResponse {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
    results: CharacterResults[];
  };
}

interface LocationResults {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

interface LocationResponse {
  locations: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
    results: LocationResults[];
  };
}

const Home: React.FC = () => {
  const [charList, setCharList] = useState<CharacterResults[]>([]);
  const [localList, setLocalList] = useState<LocationResults[]>([]);

  const [getCharacters, { data: characters }] = useLazyQuery<CharacterResponse>(
    READ_CHARACTERS,
    {
      variables: { page: 1 },
    },
  );
  const [getLocations, { data: locations }] = useLazyQuery<LocationResponse>(
    READ_LOCATIONS,
    {
      variables: { page: 1 },
    },
  );

  useEffect(() => {
    getCharacters();
    getLocations();
  }, [getCharacters, getLocations]);

  const handleAddCharacter = useCallback(
    char => {
      const characterExists = charList.find(e => e === char.id);

      if (!characterExists) {
        setCharList([...charList, char]);
      }
    },

    [charList],
  );

  const handleAddLocation = useCallback(
    local => {
      const localExists = localList.find(l => l === local.id);

      if (!localExists) {
        setLocalList([...localList, local]);
      }
    },
    [localList],
  );

  const handleCreateEpisode = useCallback(() => {
    if (charList.length !== 0 && localList.length !== 0) {
      const episodes = localStorage.getItem('@RickAndMorty:episodes');

      const newEpisode = {
        characters: charList,
        locals: localList,
      };
      if (episodes) {
        localStorage.setItem(
          '@RickAndMorty:episodes',
          JSON.stringify([...JSON.parse(episodes), newEpisode]),
        );
      } else {
        localStorage.setItem(
          '@RickAndMorty:episodes',
          JSON.stringify([newEpisode]),
        );
      }
    }
  }, [charList, localList]);

  return (
    <Container>
      <Menu>
        <Header>Rick and Morty Character List</Header>
        <Link to="episodes">
          <ShowEpisodes>Show Episodes</ShowEpisodes>
        </Link>
      </Menu>

      <Divider />
      {characters === undefined ? (
        <p>Carregando Personagens</p>
      ) : (
        <Content>
          {characters.characters.results.map(char => (
            <Character key={char.id} onClick={() => handleAddCharacter(char)}>
              <Avatar src={char.image} alt={char.image} />
              <CharacterInfo>
                <h4>Name: {char.name}</h4>
                <h5>Specie: {char.species}</h5>
                <h5>Status: {char.status}</h5>
                <h5>Gender: {char.gender}</h5>
              </CharacterInfo>
            </Character>
          ))}
          <Button
            onClick={() => {
              getCharacters({
                variables: { page: characters.characters.info.prev },
              });
            }}
          >
            {'<'}
          </Button>
          <Button
            onClick={() => {
              getCharacters({
                variables: { page: characters.characters.info.next },
              });
            }}
          >
            {'>'}
          </Button>
        </Content>
      )}
      <Divider />
      <Header>Locations List</Header>
      {locations === undefined ? (
        <p>Carregando Locais</p>
      ) : (
        <Content>
          {locations.locations.results.map(local => (
            <Location key={local.id} onClick={() => handleAddLocation(local)}>
              <LocationInfo>
                <h4>Name: {local.name}</h4>
                <h5>Specie: {local.dimension}</h5>
                <h5>Status: {local.type}</h5>
              </LocationInfo>
            </Location>
          ))}
          <Button
            onClick={() => {
              getLocations({
                variables: { page: locations.locations.info.prev },
              });
            }}
          >
            {'<'}
          </Button>
          <Button
            onClick={() => {
              getLocations({
                variables: { page: locations.locations.info.next },
              });
            }}
          >
            {'>'}
          </Button>
        </Content>
      )}
      <Divider />
      <Footer>New Episode with (Characters and Locations)</Footer>
      <Content>
        {charList.map(char => (
          <Character key={char.id}>
            <Avatar src={char.image} alt={char.image} />
            <CharacterInfo>
              <h4>Name: {char.name}</h4>
              <h5>Specie: {char.species}</h5>
              <h5>Status: {char.status}</h5>
              <h5>Gender: {char.gender}</h5>
            </CharacterInfo>
          </Character>
        ))}
        {localList.map(local => (
          <Location key={local.id}>
            <LocationInfo>
              <h4>Name: {local.name}</h4>
              <h5>Specie: {local.dimension}</h5>
              <h5>Status: {local.type}</h5>
            </LocationInfo>
          </Location>
        ))}
        <SubmitButton onClick={handleCreateEpisode}>
          Create a new Episode
        </SubmitButton>
      </Content>
    </Container>
  );
};

export default Home;
