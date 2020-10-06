import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import { useBrand, useScrollPosition } from '../../hooks'
import { Link } from '../link'
import { Menu, MobileMenu } from '../menu'
import { menuItems } from '../../menu'
import backgroundLines from '../../images/background-lines.png'
import './style.css'

const MOBILE_THRESHHOLD = 792

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Brand = styled(Link)(({ compact }) => `
  font-weight: bold;
  text-transform: uppercase;
  transition: padding 250ms;
  padding: ${ compact ? '0.25rem 2rem' : '2rem' };
`)

const Header = styled.header(({ theme }) => `
  background-color: ${ theme.color.white };
  color: ${ theme.color.black };
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
  background-image: url(${ backgroundLines });
  background-size: 1200px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
`

const Footer = styled.footer(({ theme }) => `
  padding: 2rem 2rem;
  background-color: ${ theme.color.white };
  color: ${ theme.color.black };
  text-align: center;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
`)

export const DefaultLayout = ({ children }) => {
  const windowWidth = useWindowWidth()
  const scrollPosition = useScrollPosition()
  const { light: logo } = useBrand()

  return (
    <Wrapper>
      <Header>
        <Brand to="/" compact={ scrollPosition > 150 }>
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

