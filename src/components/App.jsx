import UserPainting from './UserPainting/UserPainting';
import Statistics from './Statistics/Statistics';
import user from '../user.json';
import downloads from '../data.json';

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
      <Statistics title="Upload stats" stats={downloads} />
    </div>
  );
}
