import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ status, avatar, name }) {
  const isOnline = status ? 'online' : 'offline';
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
