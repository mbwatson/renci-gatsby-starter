import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Pre } from '../components/pre'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
export default () => {
  return (
    <Fragment>
      <SEO title="Typography" />

      <Hero backgroundImage="https://picsum.photos/1200/302" />

      <Container>
        <Title>Typography</Title>
        
        <Heading>Title</Heading>
        <Title>This is a Title</Title>
        <Pre>{`<Title>This is a Title</Title>`}</Pre>
        
        <Heading>Heading</Heading>
        <Heading>This is a Heading</Heading>
        <Pre>{`<Heading>This is a Heading</Heading>`}</Pre>
        
        <Heading>Subheading</Heading>
        <Subheading>This is a Subheading</Subheading>
        <Pre>{`<Subheading>This is a Subheading</Subheading>`}</Pre>

        <Heading>Paragraph</Heading>
        <Paragraph>
          (Paragraph) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Pre>
{`<Paragraph>
  This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Paragraph>`}
        </Pre>

      </Container>

    </Fragment>
  )
}
