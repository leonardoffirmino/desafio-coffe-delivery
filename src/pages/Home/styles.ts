import styled from 'styled-components'
import { mixins } from '../../styles/fontMixed'

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HomeContainer = styled.div`
  max-width: 72.5rem;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
  }

  > span {
  }
`

export const InfoMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`
export const CoffeList = styled.section`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 10rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    ${mixins.fonts.titleL}
    color:
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
