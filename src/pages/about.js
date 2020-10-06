import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Button } from '../components/button'
import { List } from '../components/list'

const listItems = ['one', 'two', 'three', 'four']

const AboutPage = () => {
  return (
    <Fragment>
      <SEO title="About" />
      <Hero backgroundImage="https://picsum.photos/1200/301">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </Hero>

      <Container>
        <h1>About</h1>

        <Button >Button</Button>

        <br />
        <br />

        <Button disabled>Button</Button>

        <br />
        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <List
          bullets="disc"
          items={ listItems.map(item => <a key={ item } href="/">{ item }</a>) }
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>

    </Fragment>
  )
}

export default AboutPage
