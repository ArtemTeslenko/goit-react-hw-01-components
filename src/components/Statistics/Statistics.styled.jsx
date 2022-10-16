import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  min-width: 320px;
  max-width: 420px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 4px 1px #2f2f2f, inset 0 0 10px 1px #d9d5d5;
  border-radius: 4px;
`;

export const StatList = styled.ul`
  display: flex;
  & li:not(:last-child) {
    border-right: 1px solid #9f9595;
  }
  & li {
    width: calc(100% / 5);
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #9f9595;
`;

export const Percentage = styled.span`
  display: block;
`;
