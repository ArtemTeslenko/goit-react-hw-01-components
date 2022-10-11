import UserPainting from './UserPainting/UserPainting';
import user from '../user.json';

export default function App() {
  return (
    <div>
      <UserPainting
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
