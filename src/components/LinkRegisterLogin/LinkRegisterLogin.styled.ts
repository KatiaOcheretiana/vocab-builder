import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const LinkStyle = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: rgba(18, 20, 23, 0.5);

  &:hover,
  &:focus {
    color: #121417;
  }

  transition: all 0.5s ease;
`;
