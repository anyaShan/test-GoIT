import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 36px 0;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const CardBgImg = styled.img`
  margin-bottom: 18px;
`;

export const CardAvatarWrapp = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 62px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 8px;
    width: 100%;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const CardAvatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #5736a3;
  border-radius: 50%;
  z-index: 1;
`;
export const CardAvatarBorder = styled.div`
  display: block;
  position: absolute;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const CardName = styled.p`
  margin-bottom: 16px;
`;

export const CardTweets = styled.p`
  margin-bottom: 16px;
`;

export const CardCount = styled.p`
  margin-bottom: 26px;
`;

export const CardButton = styled.button`
  padding: 14px 56px;
  text-align: center;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  &:hover {
    background-color: #5cd3a8;
  }
`;

export const CardButtonActive = styled.button`
  padding: 14px 56px;
  text-align: center;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  color: #373737;
  background-color: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  &:hover {
    background-color: #ebd8ff;
  }
`;
