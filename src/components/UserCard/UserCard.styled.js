import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
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
