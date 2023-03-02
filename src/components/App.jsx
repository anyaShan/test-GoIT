import { INITIAL_USERS } from '../users';
import { UserCard } from './UserCard/UserCard';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <ul>
        {INITIAL_USERS.map(item => (
          <li key={item.id}>
            <UserCard key={item.id} item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

// ------------------------------------
// return (
//   <Container>
//     <UserCard />
//   </Container>
// );
