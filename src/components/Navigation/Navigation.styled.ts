import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 16px 10px;

  @media screen and (min-width: 768px) {
    padding: 22px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 22px 100px;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const LogoIcon = styled.svg`
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33333;
  color: #121417;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.45455;
  }

  @media screen and (min-width: 1440px) {
  }
`;
