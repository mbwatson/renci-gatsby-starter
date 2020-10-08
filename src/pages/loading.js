import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { useTheme } from 'styled-components'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
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
        
        <Grid fluid>
          <Row>
            <Col xs={ 12 } sm={ 4 }>
              <Heading center>Text Placement - Bottom</Heading>
              <LoadingSpinner text="Loading..." textPlacement="bottom" color={ theme.color.primary.dark } />
            </Col>
            <Col xs={ 12 } sm={ 4 }>
              <Heading center>Text Placement - Top</Heading>
              <LoadingSpinner text="Fetching data..." textPlacement="top" color={ theme.color.danger } />
            </Col>
            <Col xs={ 12 } sm={ 4 }>
              <Heading center>No Text</Heading>
              <LoadingSpinner color={ theme.color.extended.sherbet } />
            </Col>
          </Row>
        </Grid>

      </Container>

    </Fragment>
  )
}
