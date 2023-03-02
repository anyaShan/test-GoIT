// import { useLocalStorage } from '../Hooks/useLocalStorage';

import { INITIAL_USERS } from '../../users';
import { UserCard } from '../UserCard/UserCard';
import { List } from './UsersList.styled';

export const UsersList = () => {
  //   const [users, setUsers] = useLocalStorage('users', INITIAL_USERS);

  //   const addUser = data => {
  //     console.log(data);
  //     const index = users.findIndex(user => user.id === data.id);
  //     console.log(users);
  //     console.log(index);
  //     setUsers(prevState => prevState.splice(index, 1, data));
  //   };

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
