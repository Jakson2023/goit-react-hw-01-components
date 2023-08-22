import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
`;
export const LiItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  width: 50px;
  border: 1px solid green;
  padding: 10px;
  background-color: ${props => {
    return function genRand() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      return 'rgb(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
    };
  }};
`;
