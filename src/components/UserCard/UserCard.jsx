import BgImg from '../../img/picture.svg';
import LogoImg from '../../img/logo.svg';

import { CardContainer, CardBgImg, CardLogo } from './UserCard.styled';

export const UserCard = () => {
  return (
    <CardContainer>
      <CardLogo src={LogoImg} alt="" />
      <CardBgImg src={BgImg} alt="" />
      <p>777 tweets</p>
      <p>100,500 Followers</p>
      <button type="button">Follow</button>
    </CardContainer>
  );
};
