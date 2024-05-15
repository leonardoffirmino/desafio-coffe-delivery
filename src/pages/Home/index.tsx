import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Hero, HomeContainer, Heading, InfoMain, CoffeList } from './styles'

import logoMainCoffee from '../../assets/coffe-home.svg'
import background from '../../assets/background.svg'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div>
      <Hero>
        <HomeContainer>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <InfoMain>
              <div>
                <ShoppingCart size={32} weight="fill" />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package size={32} weight="fill" />

                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer size={32} weight="fill" />

                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee size={32}></Coffee>

                <span>O café chega fresquinho até você</span>
              </div>
            </InfoMain>
          </div>
          <img
            src={logoMainCoffee}
            alt="Copo de café branco com bordas pretas com grãos de café em volta."
          />
        </HomeContainer>
        <img
          src={background}
          alt="Imagem de background da aplicação"
          id="hero-bg"
        />
      </Hero>

      <CoffeList>
        <h2>Nossos cafés</h2>

        <Card />
      </CoffeList>
    </div>
  )
}
