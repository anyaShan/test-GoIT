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

  div {
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const CardAvatarLine = styled.div`
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CardAvatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  background-color: #ebd8ff;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  /* &[active] {
    background-color: #ebd8ff;
  } */
`;
