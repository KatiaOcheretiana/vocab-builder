import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  color: #fcfcfc;

  &.active {
    font-weight: 500;
    font-size: 14px;
    color: #121417;

    text-align: center;

    border-radius: 15px;
    padding: 12px 0;
    background: #fcfcfc;

    width: 110px;
  }
`;
