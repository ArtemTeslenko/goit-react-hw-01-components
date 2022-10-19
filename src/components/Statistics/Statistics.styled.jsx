import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  min-width: ${p => p.theme.mainContainer.minWidth};
  max-width: ${p => p.theme.mainContainer.maxWidth};
  margin-bottom: ${p => p.theme.mainContainer.marginBottom};
  margin-left: ${p => p.theme.mainContainer.marginLeft};
  margin-right: ${p => p.theme.mainContainer.marginRight};
  text-align: ${p => p.theme.mainContainer.textAlign};
  padding: ${p => p.theme.mainContainer.padding};
  box-shadow: ${p => p.theme.mainContainer.boxShadow};
  border-radius: ${p => p.theme.mainContainer.borderRadius};
`;

export const StatList = styled.ul`
  display: flex;
  & li:not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.secondary};
  }
  & li {
    width: calc(100% / 5);
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${p => p.theme.colors.secondary};
`;

export const Percentage = styled.span`
  display: block;
`;
