import {
  CardContainer,
  CoffeImage,
  Description,
  ItemControl,
  Order,
  Price,
  Tags,
  Title,
} from './style'

import americanoCoffe from '../../assets/coffes/americano.png'
import { QuantityItem } from '../Form/QuantityItem/Index'
import { ShoppingCart } from 'phosphor-react'

export function Card() {
  return (
    <CardContainer>
      <CoffeImage src={americanoCoffe} alt="" />
      <Tags>
        <span>Especial</span>
        <span>Lindo</span>
      </Tags>
      <Title>
        <h2>Havaiano</h2>
      </Title>
      <Description>
        <span>Bebida adocicada preparada com café e leite de coco</span>
      </Description>

      <ItemControl>
        <Price>
          <span>R$</span>
          <span>9,09</span>
        </Price>

        <Order>
          <QuantityItem />

          <button>
            <ShoppingCart size={22} color="white" />
          </button>
        </Order>
      </ItemControl>
    </CardContainer>
  )
}
