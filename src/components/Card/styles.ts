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
export const Title = styled.h3``
export const Description = styled.span``
export const ItemControl = styled.div``
export const Price = styled.div``
export const Order = styled.div``
