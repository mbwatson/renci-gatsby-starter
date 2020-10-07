import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { useTheme } from 'styled-components'
import { Hero } from '../components/hero'
import { Container, Section } from '../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
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
      <SEO title="Components" />

      <Hero backgroundImage="https://picsum.photos/1200/302">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </Hero>

      <Container>
        <Title>Components</Title>
        
        <Section>
          <Heading>Buttons</Heading>

          <Subheading>Active</Subheading>

          <Button>Primary</Button> &nbsp;&nbsp;
          <Button variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button variant="info">Info</Button> &nbsp;&nbsp;
          <Button variant="success">Success</Button> &nbsp;&nbsp;
          
          <Subheading>Disabled</Subheading>

          <Button disabled>Primary</Button> &nbsp;&nbsp;
          <Button disabled variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button disabled variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button disabled variant="info">Info</Button> &nbsp;&nbsp;
          <Button disabled variant="success">Success</Button> &nbsp;&nbsp;

          <Subheading>Small Active</Subheading>

          <Button small>Primary</Button> &nbsp;&nbsp;
          <Button small variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button small variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button small variant="info">Info</Button> &nbsp;&nbsp;
          <Button small variant="success">Success</Button> &nbsp;&nbsp;
          
          <Subheading>Small Disabled</Subheading>

          <Button small disabled>Primary</Button> &nbsp;&nbsp;
          <Button small disabled variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button small disabled variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button small disabled variant="info">Info</Button> &nbsp;&nbsp;
          <Button small disabled variant="success">Success</Button> &nbsp;&nbsp;
          
        </Section>

        <br /><br />

        <Section>
          <Heading>Cards</Heading>

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
        </Section>

        <Section>
          <Heading>Typography</Heading>

          <Title>Title</Title>
          <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
          <Paragraph>
            (Paragraph) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Section>

        <Section>
          <Heading>List</Heading>

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
        </Section>

        <Section>
          <Heading>Loading Indicator</Heading>
          <Grid fluid>
            <Row>
              <Col xs={ 12 } sm={ 4 }>
                <Subheading center>Text Placement - Bottom</Subheading>
                <LoadingSpinner text="Loading..." textPlacement="bottom" color={ theme.color.primary.dark } />
              </Col>
              <Col xs={ 12 } sm={ 4 }>
                <Subheading center>Text Placement - Top</Subheading>
                <LoadingSpinner text="Fetching data..." textPlacement="top" color={ theme.color.danger } />
              </Col>
              <Col xs={ 12 } sm={ 4 }>
                <Subheading center>No Text</Subheading>
                <LoadingSpinner color={ theme.color.extended.sherbet } />
              </Col>
            </Row>
          </Grid>
        </Section>
      </Container>

    </Fragment>
  )
}
