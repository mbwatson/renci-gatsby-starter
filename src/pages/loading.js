import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { useTheme } from 'styled-components'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title, Heading } from '../components/typography'
import { Pre } from '../components/pre'
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
        <Pre>{`<LoadingSpinner text="Loading..." textPlacement="bottom" color={ theme.color.primary.dark } />`}</Pre>

        <Heading>Text Placement - Top</Heading>
        <LoadingSpinner text="Fetching data..." textPlacement="top" color={ theme.color.danger } />
        <Pre>{`<LoadingSpinner text="Fetching data..." textPlacement="top" color={ theme.color.danger } />`}</Pre>
        
        <Heading>No Text</Heading>
        <LoadingSpinner color={ theme.color.extended.sherbet } />
        <Pre>{`<LoadingSpinner color={ theme.color.extended.sherbet } />`}</Pre>

      </Container>

    </Fragment>
  )
}
