import { useState } from 'react';

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
  CardTweets,
  CardCount,
  CardButton,
} from './UserCard.styled';

export const UserCard = () => {
  const [count, setCount] = useState(100500);
  const [isFollow, setIsFollow] = useState('Follow');
  const [active, setActive] = useState(false);

  const updateCount = () => {
    if (isFollow === 'Follow') {
      setCount(prevValue => prevValue + 1);
      setIsFollow('Following');
      setActive(false);
    }

    if (isFollow !== 'Follow') {
      setCount(prevValue => prevValue - 1);
      setIsFollow('Follow');
      setActive(true);
    }

    console.log(count);
  };

  return (
    <CardContainer>
      <CardLogo src={LogoImg} alt="logo" />
      <CardBgImg src={BgImg} alt="tooltip" />
      <CardAvatarWrapp>
        <CardAvatar src={BoyImg} alt="boy" />
        <CardAvatarLine></CardAvatarLine>
      </CardAvatarWrapp>
      <CardTweets>777 tweets</CardTweets>
      <CardCount>{count} Followers</CardCount>
      <CardButton
        type="button"
        onClick={updateCount}
        // active={active}
        style={
          active
            ? { backgroundColor: '#ebd8ff' }
            : { backgroundColor: '#5cd3a8' }
        }
      >
        {isFollow}
      </CardButton>
    </CardContainer>
  );
};
