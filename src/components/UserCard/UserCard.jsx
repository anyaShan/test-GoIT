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
  CardName,
  CardTweets,
  CardCount,
  CardButton,
} from './UserCard.styled';

export const UserCard = ({ item }) => {
  const { user, tweets, followers, avatar } = item;

  const [count, setCount] = useState(followers);
  const [isFollow, setIsFollow] = useState('Follow');
  const [colorPlace, setColorPlace] = useState(true);

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem('count')));
    setIsFollow(localStorage.getItem('isFollow'));
    setColorPlace(JSON.parse(localStorage.getItem('colorPlace')));
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
      setColorPlace(false);
    }

    if (isFollow !== 'Follow') {
      setCount(count - 1);

      setIsFollow('Follow');
      setColorPlace(true);
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
      <CardName>{user}</CardName>
      <CardTweets>{tweets} tweets</CardTweets>
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
