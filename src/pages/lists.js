import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Pre } from '../components/pre'
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

        <List
          bullets="none"
          items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
        />
        <Pre>
{`<List
  bullets="none"
  items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
/>`}
        </Pre>
        <Pre>{`<List items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) } />`}</Pre>
        <List
          bullets="disc"
          items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
        />
        <Pre>
{`<List
  bullets="disc"
  items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
/>`}
        </Pre>
        <List
          bullets="circle"
          items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
        />
        <Pre>
{`<List
  bullets="circle"
  items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
/>`}
        </Pre>
        <List
          bullets="square"
          items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
        />
        <Pre>
{`<List
  bullets="square"
  items={ sampleLinks.map(item => <a key={ item.text } href={ item.path }>{ item.text }</a>) }
/>`}

        </Pre>

      </Container>

    </Fragment>
  )
}
