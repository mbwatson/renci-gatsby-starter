import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Title } from '../components/typography'
import { Card } from '../components/card'

export default () => {
  return (
    <Fragment>
      <SEO title="Cards" />

      <Hero backgroundImage="https://picsum.photos/1200/302" />

      <Container>
        <Title>Cards</Title>
        
        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 4 } style={{ margin: '1rem 0' }}>
              <Card>
                <Card.Header>Card One Title</Card.Header>
                <Card.Body>Card One Body</Card.Body>
                <Card.Footer>Card One Footer</Card.Footer>
              </Card>
            </Col>
            <Col xs={ 12 } md={ 4 } style={{ margin: '1rem 0' }}>
              <Card>
                <Card.Header>Card Two Title</Card.Header>
                <Card.Body>Card Two Body</Card.Body>
                <Card.Footer>Card Two Footer</Card.Footer>
              </Card>
            </Col>
            <Col xs={ 12 } md={ 4 } style={{ margin: '1rem 0' }}>
              <Card>
                <Card.Header>Card Three Title</Card.Header>
                <Card.Body>Card Three Body</Card.Body>
                <Card.Footer>Card Three Footer</Card.Footer>
              </Card>
            </Col>
          </Row>
        </Grid>

      </Container>

    </Fragment>
  )
}
