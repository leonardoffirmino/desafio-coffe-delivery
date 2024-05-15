import {
  CardContainer,
  CoffeImage,
  Description,
  ItemControl,
  Order,
  Price,
  Tags,
  Title,
} from './styles'

import americanoCoffe from '../../assets/coffes/americano.png'

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

        <Order></Order>
      </ItemControl>
    </CardContainer>
  )
}
