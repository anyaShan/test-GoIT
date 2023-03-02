import { UsersList } from './UsersList/UsersList';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <UsersList />
    </Container>
  );
};

// ------------------------------------
// return (
//   <Container>
//     <UserCard />
//   </Container>
// );

// ---------------------------------------
// return (
//   <Container>
//     <ul>
//       {INITIAL_USERS.map(item => (
//         <li key={item.id}>
//           <UserCard key={item.id} item={item} />
//         </li>
//       ))}
//     </ul>
//   </Container>
// );
