import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 97px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const ItemText = styled.li`
  position: relative;
  font-size: 14px;
  text-align: center;
  color: rgba(18, 20, 23, 0.8);

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;

    right: -10px;
    width: 1.5px;
    height: 1.5px;
    border-radius: 200%;
    background-color: rgba(18, 20, 23, 0.8);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
