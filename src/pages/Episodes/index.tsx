import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Content,
  Divider,
  Container,
  EpisodesDiv,
  EpisodeTitle,
  Header,
  Character,
  CharacterInfo,
  Avatar,
  Location,
  LocationInfo,
  Menu,
  ShowCharactersLocals,
} from './styles';

interface Characters {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
}

interface Locals {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

interface Episodes {
  characters: Characters[];
  locals: Locals[];
}

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);

  useEffect(() => {
    const getEpisodes = localStorage.getItem('@RickAndMorty:episodes');

    if (getEpisodes) {
      setEpisodes(JSON.parse(getEpisodes));
    }
  }, []);

  return (
    <Container>
      <Menu>
        <Header>Episode List</Header>
        <Link to="/">
          <ShowCharactersLocals>
            Show Characters and locals
          </ShowCharactersLocals>
        </Link>
      </Menu>

      <Divider />
      {episodes === undefined ? (
        <p>Carregando episódios</p>
      ) : (
        <EpisodesDiv>
          {episodes.map((e, index) => (
            <>
              <EpisodeTitle>Episode number: {index + 1}</EpisodeTitle>
              <Content>
                {e.characters.map(char => (
                  <Character>
                    <Avatar src={char.image} alt={char.image} />
                    <CharacterInfo>
                      <h4>Name: {char.name}</h4>
                      <h5>Specie: {char.species}</h5>
                      <h5>Status: {char.status}</h5>
                      <h5>Gender: {char.gender}</h5>
                    </CharacterInfo>
                  </Character>
                ))}

                {e.locals.map(local => (
                  <Location key={local.id}>
                    <LocationInfo>
                      <h3>Local</h3>
                      <h4>Name: {local.name}</h4>
                      <h5>Specie: {local.dimension}</h5>
                      <h5>Status: {local.type}</h5>
                    </LocationInfo>
                  </Location>
                ))}
              </Content>
              <Divider />
            </>
          ))}
        </EpisodesDiv>
      )}
    </Container>
  );
};
export default Episodes;
