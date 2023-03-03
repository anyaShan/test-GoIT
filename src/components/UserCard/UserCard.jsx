import { useLocalStorage } from '../Hooks/useLocalStorage';

import BgImg from '../../img/picture.svg';
import LogoImg from '../../img/logo.svg';

import {
  CardContainer,
  CardBgImg,
  CardLogo,
  CardAvatarWrapp,
  CardAvatarLine,
  CardAvatar,
  CardName,
  CardTweets,
  CardCount,
  CardButton,
  CardButtonActive,
  CardAvatarBorder,
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
      <CardBgImg src={BgImg} alt="tooltip" />
      <CardAvatarWrapp>
        <CardAvatarLine></CardAvatarLine>
        <CardAvatar src={avatar} alt="" />
        <CardAvatarBorder />
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
