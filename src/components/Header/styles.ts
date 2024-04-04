import styled from 'styled-components'
import { mixins } from '../../styles/fontMixed'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 80rem;
  padding: 2rem 1.8rem;
  margin: 0 auto;
`

export const AsideContainer = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${(props) => props.theme['purple-light']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      color: ${(props) => props.theme['purple-dark']};
      ${mixins.fonts.textS};
    }

    padding: 0.8rem;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.8rem;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
