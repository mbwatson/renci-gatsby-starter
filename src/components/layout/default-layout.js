import React from 'react'
import styled from 'styled-components'
import { Menu, MobileMenu } from '../menu'
import { useWindowWidth } from '@react-hook/window-size'
import './style.css'
import { menuItems } from '../../menu'
import Img from 'gatsby-image'
import { useBrand, useScrollPosition } from '../../hooks'

const MOBILE_THRESHHOLD = 792

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Brand = styled.div(({ compact }) => `
  font-weight: bold;
  text-transform: uppercase;
  transition: padding 250ms;
  padding: ${ compact ? '0.25rem 2rem' : '2rem' };
`)

const Header = styled.header(({ theme }) => `
  background-color: ${ theme.color.black };
  color: ${ theme.color.white };
  display: flex;
  flex-direction: row;
  justify-content: space-between;100%
  align-items: stretch;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  position: sticky;
  top: 0;
  z-index: 1;
`)

const Main = styled.main`
  flex: 1;
  width: 100%;
  z-index: 0;
`

const Footer = styled.footer(({ theme }) => `
  padding: 2rem 2rem;
  background-color: ${ theme.color.black };
  color: ${ theme.color.white };
  text-align: center;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
`)

export const DefaultLayout = ({ children }) => {
  const windowWidth = useWindowWidth()
  const scrollPosition = useScrollPosition()
  const { dark: logo } = useBrand()

  return (
    <Wrapper>
      <Header>
        <Brand compact={ scrollPosition > 150 }>
          <Img fixed={ logo } style={{ width: '82.5px', height: '54px', margin: 0 }} /> <br/>
        </Brand>
        { windowWidth <= MOBILE_THRESHHOLD  ? <MobileMenu items={ menuItems } /> : <Menu items={ menuItems } /> }
      </Header>
      <Main>
        { children }
      </Main>
      <Footer>
        &copy; { new Date().getFullYear() } 
      </Footer>
    </Wrapper>
  )
}

