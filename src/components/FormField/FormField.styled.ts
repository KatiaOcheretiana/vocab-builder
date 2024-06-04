import styled from 'styled-components';
import { globalColor } from '../../styles/root';

type IsErrorInput = {
  error: boolean;
  valid?: boolean;
};

export const Label = styled.label<IsErrorInput>`
  width: 100%;
  position: relative;

  ${(props) =>
    props.error &&
    `
    input {
      border-color: #D80027;
    }
    p {
      color: #D80027;
    }
  `}

  ${(props) =>
    props.valid &&
    `
    input {
      border-color: #3CBF61;
    }
    p {
      color: #3CBF61;
    }
  `}
`;

export const Input = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  padding: 16px 18px;
  width: 100%;

  &:hover {
    border-color: #85aa9f;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${globalColor.black};
  }
`;

export const IconEye = styled.svg`
  stroke-width: 2px;
  stroke: #11101c;
  fill: transparent;

  width: 20px;
  height: 20px;

  position: absolute;
  top: 16px;
  right: 16px;
`;

export const NotificationField = styled.div`
  position: absolute;
  display: flex;
  gap: 4px;
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
`;

export const CheckValueIcon = styled.svg`
  width: 16px;
  height: 16px;
`;
