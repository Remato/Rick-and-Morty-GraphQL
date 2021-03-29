import { gql } from '@apollo/client';

export const READ_CHARACTERS = gql`
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
`;

export const READ_LOCATIONS = gql`
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
`;
