import { useLocalStorage } from '../Hooks/useLocalStorage';

import LogoImg from '../../img/logo.svg';

import {
  CardContainer,
  CardLogo,
  CardAvatarWrapp,
  CardAvatar,
  CardName,
  CardTweets,
  CardCount,
  CardButton,
  CardButtonActive,
} from './UserCard.styled';

export const UserCard = ({ item }) => {
  const { id, user, tweets, followers, avatar } = item;

  const [count, setCount] = useLocalStorage(id, followers);

  const countIncrement = () => {
    setCount(count + 1);
  };

  const countDecrement = () => {
    setCount(count - 1);
  };

  const validCount = new Intl.NumberFormat('en-US').format(count);

  return (
    <CardContainer>
      <CardLogo src={LogoImg} alt="logo" />
      <CardAvatarWrapp>
        <CardAvatar src={avatar} alt="avatar" />
      </CardAvatarWrapp>
      <CardName>{user}</CardName>
      <CardTweets>{tweets} tweets</CardTweets>
      <CardCount>{validCount} Followers</CardCount>

      {count === followers ? (
        <CardButton type="button" onClick={countIncrement}>
          Follow
        </CardButton>
      ) : (
        <CardButtonActive type="button" onClick={countDecrement}>
          Following
        </CardButtonActive>
      )}
    </CardContainer>
  );
};
