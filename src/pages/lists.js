import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Title } from '../components/typography'
import { List } from '../components/list'

const sampleLinks = [
  { text: 'one', path: '#' },
  { text: 'two', path: '#' },
  { text: 'three', path: 'http://example.com/' },
  { text: 'four', path: '#' },
]

export default () => {
  return (
    <Fragment>
      <SEO title="Lists" />

      <Hero backgroundImage="https://picsum.photos/1200/302" />

      <Container>
        <Title>Lists</Title>

        <Grid fluid>
          <Row>
            <Col xs={ 12 } sm={ 6 } md={ 3 }>
              <List
                bullets="disc"
                items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
              />
            </Col>
            <Col xs={ 12 } sm={ 6 } md={ 3 }>
              <List
                bullets="circle"
                items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
              />
            </Col>
            <Col xs={ 12 } sm={ 6 } md={ 3 }>
              <List
                bullets="square"
                items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
              />
            </Col>
            <Col xs={ 12 } sm={ 6 } md={ 3 }>
              <List
                bullets="none"
                items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
              />
            </Col>
          </Row>
        </Grid>

      </Container>

    </Fragment>
  )
}
