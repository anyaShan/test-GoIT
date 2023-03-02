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
  // const { id, user, tweets, followers, avatar } = item;

  // const [state, setState] = useState(item);

  const [count, setCount] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(`user-${item.id}`)) ?? item.followers
    );
  });

  // const [count, setCount] = useState(item.followers);
  const [isFollow, setIsFollow] = useState('Follow');
  const [colorPlace, setColorPlace] = useState(true);

  // const [count, setCount] = useState(() => {
  //   const storageCount = localStorage.getItem(`followers-${item.id}`);
  //   return storageCount ? parseInt(storageCount) : item.followers;
  // });

  // useEffect(() => {
  //   setCount(JSON.parse(localStorage.getItem('count')));
  //   setIsFollow(localStorage.getItem('isFollow'));
  //   setColorPlace(JSON.parse(localStorage.getItem('colorPlace')));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('count', count);
  //   localStorage.setItem('isFollow', isFollow);
  //   localStorage.setItem('colorPlace', colorPlace);
  // }, [colorPlace, count, isFollow]);

  useEffect(() => {
    localStorage.setItem(`user-${item.id}`, count);
  }, [count, item.id]);

  // const updateCount = () => {
  //   if (isFollow === 'Follow') {
  //     setCount(count + 1);
  //     setIsFollow('Following');
  //     setColorPlace(false);
  //   }

  //   if (isFollow !== 'Follow') {
  //     setCount(count - 1);

  //     setIsFollow('Follow');
  //     setColorPlace(true);
  //   }
  // };

  const updateCount = () => {
    if (count === item.followers) {
      setCount(count + 1);
      setIsFollow('Following');
      setColorPlace(false);
    } else {
      setCount(count - 1);
      setIsFollow('Follow');
      setColorPlace(true);
    }
  };

  // const updateHandleUser = count => {
  //   console.log(state);
  //   setState(prevState => ({ ...prevState, followers: count }));
  //   onCange(state);
  // };

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
