import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          status={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}
