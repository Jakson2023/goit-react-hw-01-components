import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;

export const TableGrid = styled.tr`
  background-color: ${index => {
    if (index.index % 2) {
      return 'rgb(171 171 213 / 20%)';
    }
  }};
`;

export const TableHead = styled.th`
  background-color: #4299c5;
  height: 30px;
  border: 1px solid green;
  color: white;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid green;
`;
