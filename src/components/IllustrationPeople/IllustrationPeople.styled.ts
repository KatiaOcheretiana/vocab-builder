import styled from 'styled-components';

export const Image = styled.img`
  margin: 0 auto 8px auto;
  width: 247px;
  height: 191px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    width: 498px;
    height: 435px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
