import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 0;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid grey;
  width: 100%;
  height: 70px;
  justify-content: center;
  background-color: lightgray;
`;

export const Description = styled.div`
  text-align: center;
  padding: 30px;
`;

export const Images = styled.img`
  width: 100px;
  border-radius: 50%;
  background-color: yellow;
`;

export const ProfileCard = styled.div`
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
