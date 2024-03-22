import { HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoCoffee}
        alt="Logo do cabeçalho do desafio do coffee delivery"
      />

      <div>
        <MapPin size={22} />
        <span>São paulo, SP</span>
      </div>

      <div>
        <ShoppingCart size={22} />
        <span></span>
      </div>
    </HeaderContainer>
  )
}
