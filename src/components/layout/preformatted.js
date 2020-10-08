import styled from 'styled-components'

export const Preformatted = styled.pre(({ theme }) => `
  margin: 1rem 0;
  padding: 1rem;
  text-align: left;
  background: ${ theme.color.black };
  color: ${ theme.color.extended.moss };
`)
