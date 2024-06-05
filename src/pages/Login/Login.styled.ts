import styled from 'styled-components';

import vector from '../../assets/images/vector.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 112px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 86px;
    margin-top: 90px;
  }
`;

export const BoxDecoration = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-image: url(${vector});
    background-size: contain;
    background-repeat: no-repeat;

    position: fixed;
    bottom: -20px;
    right: 0;
    z-index: -1;
    width: 693px;
    height: 597px;
  }

  @media screen and (min-width: 1440px) {
    width: 693px;
    height: 597px;
  }
`;
