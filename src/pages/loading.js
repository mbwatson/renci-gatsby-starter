import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { useTheme } from 'styled-components'
import { Hero } from '../components/hero'
import { Container, Preformatted } from '../components/layout'
import { Title, Heading } from '../components/typography'
import { LoadingSpinner } from '../components/loading-spinner'

export default () => {
  const theme = useTheme()
  return (
    <Fragment>
      <SEO title="Loading Indicators" />

      <Hero backgroundImage="https://picsum.photos/1200/302" />

      <Container>
        <Title>Loading Indicators</Title>
        
        <Heading>Text Placement - Bottom</Heading>
        <LoadingSpinner text="Loading..." textPlacement="bottom" color={ theme.color.primary.dark } />
        <Preformatted>{`<LoadingSpinner text="Loading..." textPlacement="bottom" color={ theme.color.primary.dark } />`}</Preformatted>

        <Heading>Text Placement - Top</Heading>
        <LoadingSpinner text="Fetching data..." textPlacement="top" color={ theme.color.danger } />
        <Preformatted>{`<LoadingSpinner text="Fetching data..." textPlacement="top" color={ theme.color.danger } />`}</Preformatted>
        
        <Heading>No Text</Heading>
        <LoadingSpinner color={ theme.color.extended.sherbet } />
        <Preformatted>{`<LoadingSpinner color={ theme.color.extended.sherbet } />`}</Preformatted>

      </Container>

    </Fragment>
  )
}
