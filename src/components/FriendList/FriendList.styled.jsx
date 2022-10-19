import styled from 'styled-components';

export const FriendListWrapper = styled.ul`
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
