// import { useLocalStorage } from '../Hooks/useLocalStorage';

import { INITIAL_USERS } from '../../users';
import { UserCard } from '../UserCard/UserCard';
import { List } from './UsersList.styled';

export const UsersList = () => {
  return (
    <List>
      {INITIAL_USERS.map(item => (
        <li key={item.id}>
          <UserCard key={item.id} item={item} />
        </li>
      ))}
    </List>
  );
};
