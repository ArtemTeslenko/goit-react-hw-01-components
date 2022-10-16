import PropTypes from 'prop-types';
import { Avatar, FriendItem, Status } from './FriendListItem.styled';

export default function FriendListItem({ status, avatar, name }) {
  return (
    <FriendItem>
      <Status isOnline={status}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
