import styled from 'styled-components';

export const ProfileWrapper = styled.div`
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

export const Description = styled.div`
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 100%;
  padding: 2px;
  margin-bottom: 5px;
  border: 3px dotted black;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const UserTag = styled.p`
  margin-bottom: 5px;
  color: ${p => p.theme.colors.secondary};
`;

export const UserLocation = styled.p`
  color: ${p => p.theme.colors.secondary};
`;

export const Stats = styled.ul`
  display: flex;
  & li:not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.secondary};
  }
  & li {
    width: calc(100% / 3);
  }
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: block;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${p => p.theme.colors.secondary};
`;
