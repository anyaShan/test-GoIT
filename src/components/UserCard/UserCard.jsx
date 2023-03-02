import { useState, useEffect } from 'react';

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
  const [colorPlace, setcolorPlace] = useState(true);

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem('count')));
    setIsFollow(localStorage.getItem('isFollow'));
    setcolorPlace(JSON.parse(localStorage.getItem('colorPlace')));
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
    localStorage.setItem('isFollow', isFollow);
    localStorage.setItem('colorPlace', colorPlace);
  }, [colorPlace, count, isFollow]);

  const updateCount = () => {
    if (isFollow === 'Follow') {
      setCount(count + 1);
      setIsFollow('Following');
      setcolorPlace(false);
    }

    if (isFollow !== 'Follow') {
      setCount(count - 1);

      setIsFollow('Follow');
      setcolorPlace(true);
    }
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
      <CardTweets>777 tweets</CardTweets>
      <CardCount>{validCount} Followers</CardCount>
      <CardButton
        type="button"
        onClick={updateCount}
        style={{ backgroundColor: colorPlace ? '#ebd8ff' : '#5cd3a8' }}
      >
        {isFollow}
      </CardButton>
    </CardContainer>
  );
};
