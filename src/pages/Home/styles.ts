import styled from 'styled-components';

export const Container = styled.div``;

export const Menu = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;

  button {
    :hover {
      cursor: pointer;
    }
  }

  header {
    margin-right: 10px;
  }
`;

export const ShowEpisodes = styled.button`
  width: 100px;
  height: 50px;
`;

export const Header = styled.header`
  font-size: 40px;
  text-align: center;
`;

export const Footer = styled.footer`
  font-size: 40px;
  text-align: center;
`;

export const Divider = styled.hr`
  border-top: 1px solid #363636;
  margin: 20px;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
`;

// --------------- Characters --------------- //

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`;

export const Character = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #666;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;

  align-items: center;

  img {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const CharacterInfo = styled.div``;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
// --------------- Locations --------------- //

export const Location = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #666;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;

  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const LocationInfo = styled.div``;

export const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
`;
