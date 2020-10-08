import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { useTheme } from 'styled-components'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Title, Heading } from '../components/typography'
import { Icon } from '../components/icons'

const IconDemo = ({ icon, text }) => {
  const theme = useTheme()
  return (
    <Fragment>
      <Icon icon={ icon } size={ 36 } fill={ theme.color.primary.main } style={{ margin: '1rem' }} />
      <div>{ text }</div>
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
        
        <Heading>Actions</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="backspace" text="backspace" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="cancel" text="cancel" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="close" text="close" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="delete" text="delete" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="download" text="download" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="hamburger" text="hamburger" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="magnifyingGlass" text="magnifying glass" />
            </Col>          
          </Row>
        </Grid>

        <Heading>Account</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="user" text="user" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="userCircle" text="userCircle" />
            </Col>          
          </Row>
        </Grid>

        <Heading>Chevrons</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronUp" text="chevron up" />
            </Col>          
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronDown" text="chevron down" />
            </Col>          
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronLeft" text="chevron left" />
            </Col>          
            <Col xs={ 6 } sm={ 3 } style={{ textAlign: 'center'}}>
              <IconDemo icon="chevronRight" text="chevron right" />
            </Col>          
          </Row>
        </Grid>

        <Heading>Media</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="pause" text="pause" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="play" text="play" />
            </Col>          
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="stop" text="stop" />
            </Col>          
          </Row>
        </Grid>

        <Heading>Notification</Heading>
        <Grid fluid>
          <Row>
            <Col xs={ 4 } sm={ 3 } lg={ 2 } style={{ textAlign: 'center'}}>
              <IconDemo icon="warning" text="warning" />
            </Col>          
          </Row>
        </Grid>

      </Container>

    </Fragment>
  )
}
