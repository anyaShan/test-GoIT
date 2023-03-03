import { useState, useEffect } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

import BgImg from '../../img/picture.svg';
import LogoImg from '../../img/logo.svg';
import BoyImg from '../../img/boy.svg';

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
} from './UserCard.styled';

export const UserCard = ({ item }) => {
  // const { id, user, tweets, followers, avatar } = item;

  const [count, setCount] = useLocalStorage(item.id, item.followers);

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
        <CardAvatar src={BoyImg} alt="boy" />
        <CardAvatarLine></CardAvatarLine>
      </CardAvatarWrapp>
      <CardName>{item.user}</CardName>
      <CardTweets>{item.tweets} tweets</CardTweets>
      <CardCount>{validCount} Followers</CardCount>

      {count === item.followers ? (
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

// ----------------------------------------------------------------
// return (
//   <CardContainer>
//     <CardLogo src={LogoImg} alt="logo" />
//     <CardBgImg src={BgImg} alt="tooltip" />
//     <CardAvatarWrapp>
//       <CardAvatar src={BoyImg} alt="boy" />
//       <CardAvatarLine></CardAvatarLine>
//     </CardAvatarWrapp>
//     <CardName>{item.user}</CardName>
//     <CardTweets>{item.tweets} tweets</CardTweets>
//     <CardCount>{validCount} Followers</CardCount>
//     <CardButton
//       type="button"
//       onClick={updateCount}
//       style={{ backgroundColor: colorPlace ? '#ebd8ff' : '#5cd3a8' }}
//     >
//       {isFollow}
//     </CardButton>
//   </CardContainer>
// );

// ----------------------------------------------------
// const updateCount = () => {
//   if (count === item.followers) {
//     setCount(count + 1);
//     setIsFollow('Following');
//     setColorPlace(false);
//   } else {
//     setCount(count - 1);
//     setIsFollow('Follow');
//     setColorPlace(true);
//   }
// };
