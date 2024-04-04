import { AsideContainer, HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoCoffee}
        alt="Logo do cabeçalho do desafio do coffee delivery"
      />

      <AsideContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São paulo, SP</span>
        </div>

        <Link to="..">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </Link>
      </AsideContainer>
    </HeaderContainer>
  )
}
