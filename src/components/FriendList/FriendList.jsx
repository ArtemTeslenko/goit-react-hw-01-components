import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendListWrapper } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListWrapper>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          status={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendListWrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
