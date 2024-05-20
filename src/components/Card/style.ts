import styled from 'styled-components'
import { mixins } from '../../styles/fontMixed'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
  width: 16rem;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeImage = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag};
  }
`
export const Title = styled.h3`
  margin-top: 8px;
  width: 100%;

  color: ${(props) => props.theme['base-subtitle']};
  ${mixins.fonts.titleS}
`
export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${(props) => props.theme['base-label']};
  ${mixins.fonts.textS}
`

export const ItemControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${(props) => props.theme['base-text']};
  }
`
export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${(props) => props.theme['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${(props) => props.theme['purple-light']};
    }
  }
`
