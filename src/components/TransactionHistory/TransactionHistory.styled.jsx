import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: ${p => p.theme.mainContainer.maxWidth};
  margin-bottom: ${p => p.theme.mainContainer.marginBottom};
  margin-left: ${p => p.theme.mainContainer.marginLeft};
  margin-right: ${p => p.theme.mainContainer.marginRight};
  text-align: ${p => p.theme.mainContainer.textAlign};
  padding: ${p => p.theme.mainContainer.padding};
  box-shadow: ${p => p.theme.mainContainer.boxShadow};
  border-radius: ${p => p.theme.mainContainer.borderRadius};

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
