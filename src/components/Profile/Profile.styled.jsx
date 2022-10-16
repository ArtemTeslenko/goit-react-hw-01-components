import styled from 'styled-components';

export const ProfileWrapper = styled.div`
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
  color: #9f9595;
`;

export const UserLocation = styled.p`
  color: #9f9595;
`;

export const Stats = styled.ul`
  display: flex;
  & li:not(:last-child) {
    border-right: 1px solid #9f9595;
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
  color: #9f9595;
`;
