import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled, { useTheme } from 'styled-components'
import { Icon } from '../icons'
import { Toggler } from './toggler'

const DRAWER_WIDTH = 400

const Drawer = styled.div(({ theme, translation }) => `
  background-color: ${ theme.color.grey.dark };
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  max-width: calc(100% - 3.5rem);
  width: ${ DRAWER_WIDTH }px;
  padding-top: 5rem;
  transition: transform 250ms;
  transform: translateX(${ translation });
  z-index: 9;
`)

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

const MenuItem = styled(Link)(({ theme }) => `
  color: #eee;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: background-color 250ms;
  &:hover {
    background-color: ${ theme.color.grey.main };
  }
`)

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  
  const handleToggleMenu = () => setOpen(!open)
  const handleCloseMenu = () => setOpen(false)

  useEffect(() => {
    const escapeHatch = event => {
      if (event.keyCode === 27) { // escape key
        handleCloseMenu()
      }
    }
    if (open) {
      document.addEventListener('keydown', escapeHatch)
    }
    return () => document.removeEventListener('keydown', escapeHatch)
  }, [open])
  
  return (
    <Fragment>
      <Toggler onClick={ handleToggleMenu } active={ open } />
      <Drawer translation={ open ? '0' : '-100%' }>
        <Nav>
          <MenuItem onClick={ handleCloseMenu } to="/">Home</MenuItem>
          <MenuItem onClick={ handleCloseMenu } to="/about">About</MenuItem>
          <MenuItem onClick={ handleCloseMenu } to="/contact">Contact</MenuItem>
        </Nav>
      </Drawer>
    </Fragment>
  )
}
