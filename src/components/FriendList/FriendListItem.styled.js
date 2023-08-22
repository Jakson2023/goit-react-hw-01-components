import styled from 'styled-components';

export const LiItems = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  height: 50px;
  border: 2px solid orange;
  gap: 10px;
  padding: 5px;
  box-shadow: 5px 5px 5px grey;
`;

export const Status = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${online => {
    return online.online ? 'green' : 'red';
  }};
`;
