import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const Button = styled.button`
  border-radius: 30px;
  padding: 16px;

  align-content: center;
  background: ${globalColor.green};
  border: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${globalColor.white};

  &:hover,
  &:focus {
    background: #a5c0b8;
  }

  transition: all 0.5s ease;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    font-size: 18px;
    line-height: 1.55556;
  }

  @media screen and (min-width: 1440px) {
  }
`;
