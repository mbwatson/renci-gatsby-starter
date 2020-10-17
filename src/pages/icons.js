import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { useTheme } from 'styled-components'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Pre } from '../components/pre'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Title, Heading } from '../components/typography'
import { Icon } from '../components/icon'

const IconDemo = ({ icon }) => {
  const theme = useTheme()
  return (
    <Fragment>
      <Icon icon={ icon } size={ 36 } fill={ theme.color.primary.main } style={{ margin: '1rem' }} />
      <div>{ icon }</div>
    </Fragment>
  )
}

export default () => {
  return (
    <Fragment>
      <SEO title="Icons" />

      <Hero backgroundImage="https://picsum.photos/1200/302" />

      <Container>
        <Title>Icons</Title>
        
        <Heading>Account</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="user" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="userCircle" />
            </Col>
          </Row>
        </Grid>
        <Pre>
{`<Icon icon="user" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="userCircle" size={ 36 } fill={ theme.color.primary.main } />`}
        </Pre>

        <Heading>Actions</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="backspace" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="cancel" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="close" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="copy" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="cut" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="delete" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="download" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="hamburger" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="magnifyingGlass" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="paste" />
            </Col>
          </Row>
        </Grid>
        <Pre>
{`<Icon icon="backspace" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="cancel" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="close" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="copy" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="cut" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="delete" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="download" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="hamburger" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="magnifyingGlass" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="paste" size={ 36 } fill={ theme.color.primary.main } />`}
        </Pre>

        <Heading>Arrows</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronUp" />
            </Col>
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronDown" />
            </Col>
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronLeft" />
            </Col>
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronRight" />
            </Col>
          </Row>
        </Grid>
        <Pre>
{`<Icon icon="chevronUp" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="chevronDown" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="chevronLeft" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="chevronRight" size={ 36 } fill={ theme.color.primary.main } />`}
        </Pre>

        <Heading>Media</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="pause" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="play" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="stop" />
            </Col>
          </Row>
        </Grid>
        <Pre>
{`<Icon icon="pause" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="play" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="stop" size={ 36 } fill={ theme.color.primary.main } />`}
        </Pre>

        <Heading>WWW</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="email" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="facebook" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="github" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="instagram" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="link" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="linkedIn" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="rss" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="slack" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="twitter" />
            </Col>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="youtube" />
            </Col>
          </Row>
        </Grid>
        <Pre>
{`<Icon icon="email" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="facebook" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="github" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="instagram" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="link" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="linkedIn" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="rss" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="slack" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="twitter" size={ 36 } fill={ theme.color.primary.main } />
<Icon icon="youtube" size={ 36 } fill={ theme.color.primary.main } />`}
        </Pre>

        <Heading>RENCI</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="renciDash" />
            </Col>
          </Row>
        </Grid>
        <Pre>{`<Icon icon="renciDash" size={ 36 } fill={ theme.color.primary.main } />`}</Pre>

        <Heading>Notification</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="warning" />
            </Col>
          </Row>
        </Grid>
        <Pre>{`<Icon icon="warning" size={ 36 } fill={ theme.color.primary.main } />`}</Pre>

      </Container>

    </Fragment>
  )
}
