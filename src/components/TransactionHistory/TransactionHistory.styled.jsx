import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 420px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 4px 1px #2f2f2f, inset 0 0 10px 1px #d9d5d5;
  border-radius: 4px;

  & thead {
    background-color: #239dd5;
    color: #ffffff;
    box-shadow: inset 0 0 10px 2px #405dd5;
  }

  & tr:nth-child(even) {
    background-color: #239dd550;
    box-shadow: inset 0 0 10px 2px #405ed560;
  }
`;
