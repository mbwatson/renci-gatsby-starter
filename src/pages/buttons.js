import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container, Pre, Section } from '../components/layout'
import { Title, Heading } from '../components/typography'
import { Button } from '../components/button'

export default () => {
  return (
    <Fragment>
      <SEO title="Buttons" />

      <Hero backgroundImage="https://picsum.photos/1200/302" />

      <Container>
        <Title>Buttons</Title>
        
        <Section>
          <Heading>Active</Heading>

          <Button>Primary</Button> &nbsp;&nbsp;
          <Button variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button variant="info">Info</Button> &nbsp;&nbsp;
          <Button variant="success">Success</Button> &nbsp;&nbsp;

          <Pre>
{`<Button>Primary</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>`}
          </Pre>
        
          <Heading>Disabled</Heading>

          <Button disabled>Primary</Button> &nbsp;&nbsp;
          <Button disabled variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button disabled variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button disabled variant="info">Info</Button> &nbsp;&nbsp;
          <Button disabled variant="success">Success</Button> &nbsp;&nbsp;

          <Pre>
{`<Button disabled>Primary</Button>
<Button disabled variant="danger">Danger</Button>
<Button disabled variant="warning">Warning</Button>
<Button disabled variant="info">Info</Button>
<Button disabled variant="success">Success</Button>`}
          </Pre>

          <Heading>Small Active</Heading>

          <Button small>Primary</Button> &nbsp;&nbsp;
          <Button small variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button small variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button small variant="info">Info</Button> &nbsp;&nbsp;
          <Button small variant="success">Success</Button> &nbsp;&nbsp;

          <Pre>
{`<Button small>Primary</Button>
<Button small variant="danger">Danger</Button>
<Button small variant="warning">Warning</Button>
<Button small variant="info">Info</Button>
<Button small variant="success">Success</Button>`}
          </Pre>
          
          <Heading>Small Disabled</Heading>

          <Button small disabled>Primary</Button> &nbsp;&nbsp;
          <Button small disabled variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button small disabled variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button small disabled variant="info">Info</Button> &nbsp;&nbsp;
          <Button small disabled variant="success">Success</Button> &nbsp;&nbsp;
          
          <Pre>
{`<Button small disabled>Primary</Button>
<Button small disabled variant="danger">Danger</Button>
<Button small disabled variant="warning">Warning</Button>
<Button small disabled variant="info">Info</Button>
<Button small disabled variant="success">Success</Button>`}
          </Pre>
        </Section>

      </Container>

    </Fragment>
  )
}
