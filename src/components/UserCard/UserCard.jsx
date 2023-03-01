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
  return (
    <CardContainer>
      <CardLogo src={LogoImg} alt="logo" />
      <CardBgImg src={BgImg} alt="tooltip" />
      <CardAvatarWrapp>
        <CardAvatar src={BoyImg} alt="boy" />
        <CardAvatarLine></CardAvatarLine>
      </CardAvatarWrapp>
      <CardTweets>777 tweets</CardTweets>
      <CardCount>100,500 Followers</CardCount>
      <CardButton type="button">Follow</CardButton>
    </CardContainer>
  );
};
