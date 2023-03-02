import { INITIAL_USERS } from '../../users';
import { UserCard } from '../UserCard/UserCard';

export const UsersList = () => {
  return (
    <ul>
      {INITIAL_USERS.map(item => (
        <li key={item.id}>
          <UserCard key={item.id} item={item} />
        </li>
      ))}
    </ul>
  );
};
