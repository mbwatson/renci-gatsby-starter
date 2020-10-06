import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { useTheme } from 'styled-components'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Title, Heading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { List } from '../components/list'
import { LoadingSpinner } from '../components/loading-spinner'
import { Card } from '../components/card'

const sampleLinks = [
  { text: 'one', path: '#' },
  { text: 'two', path: '#' },
  { text: 'three', path: 'http://example.com/' },
  { text: 'four', path: '#' },
]

export default () => {
  const theme = useTheme()
  return (
    <Fragment>
      <SEO title="About" />
      <Hero backgroundImage="https://picsum.photos/1200/301">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </Hero>

      <Container>
        <Title>About</Title>

        <Paragraph align="center" width="600px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Button >Button</Button>

        <br />
        <br />

        <Button disabled>Button</Button>

        <br />
        <br />

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

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Heading>A List</Heading>

        <List
          bullets="disc"
          items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
        />

        <Heading>Last Heading</Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </Paragraph>

        <LoadingSpinner text="Loading..." textPlacement="bottom" color={ theme.color.primary.main } />
      </Container>

    </Fragment>
  )
}
