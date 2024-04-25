import { CardContainer } from './styles'

export function Card() {
  return (
    <CardContainer>
      <Tags>
        <span>Especial</span>
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
          <QuantityInput></QuantityInput>
        </Order>
      </ItemControl>
    </CardContainer>
  )
}
