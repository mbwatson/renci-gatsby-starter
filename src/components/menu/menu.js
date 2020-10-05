import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const MenuItem = styled(Link)(({ theme }) => `
  color: #eee;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${ theme.spacing.md };
  text-transform: uppercase;
  transition: background-color 250ms;
  &:hover {
    background-color: ${ theme.color.grey.dark };
  }
`)

export const Menu = () => {
  return (
    <Wrapper>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Wrapper>
  )
}
