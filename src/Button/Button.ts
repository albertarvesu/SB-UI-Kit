
import styled, { css } from 'styled-components';

interface IProps {
  primary?: boolean;
  secondary?: boolean;

  small?: boolean;
  large?: boolean;
}

export const Button = styled.button<IProps>`
    border-radius: 3.125rem;
    color: white;
    outline: none;
    cursor: pointer;
    border: none;

    padding: 1rem 1.5rem;
    font-size: 1rem;

    background-color: grey;

    ${props => props.primary && css`
      background-color: deeppink;
    `}

    ${props => props.secondary && css`
      background-color: grey;
    `}

    ${props => props.small && css`
      padding: 0.75rem 1.25rem;
      font-size: 0.75rem;
    `}

    ${props => props.large && css`
      padding: 1.25rem 1.75rem;
      font-size: 1.25rem;
    `}
`;

export default Button;
