import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px;
  background-color: ${(props) => props.theme.base_color};
  border-radius: 6px;

  display: flex;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${(props) => props.theme.purple}l

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${(props) => props.theme['base-title']};
  }
`
