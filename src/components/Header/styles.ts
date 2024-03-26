import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1440px;
  padding: 32px 30px;
  margin: 0 auto;
`

export const AsideContainer = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`
