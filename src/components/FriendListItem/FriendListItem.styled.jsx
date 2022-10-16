import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  box-shadow: inset -2px -2px 5px 1px #e2dede;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background: radial-gradient(
    ${p => {
        return p.isOnline ? '#49ef96c1' : '#ef3636c2';
      }}
      30%,
    #fff 70%
  );
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;
