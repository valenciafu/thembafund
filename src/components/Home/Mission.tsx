import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { H1, H2, P, Container, Section, Card, Row, Col } from '../../shared'
import {
  WHITE,
  ALLBIRDS_GRAY,
  TEAL_ALPHA,
  PINK_ALPHA,
  GREEN_ALPHA,
} from '../../constants/colors'
import {
  BORDER_RADIUS_LG,
  M2,
  maxWidth,
  PHONE,
} from '../../constants/measurements'

const StatWrapper = styled.div`
  padding: 1rem;
  border-radius: ${BORDER_RADIUS_LG};
  margin-bottom: 1.5rem;
  width: 100%;
  box-shadow: 0 1px 8px ${ALLBIRDS_GRAY};

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${maxWidth(PHONE)} {
    display: block;
  }
`

const Image = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 100%;
  margin-bottom: ${M2};
`

interface IStat {
  content: string
}

const stats: IStat[] = [
  {
    content:
      'Understand what they need to get from 0 to 1, and 1 to 10, and aren’t bashful when it comes to the help they need',
  },
  {
    content: 'Dream large enough to change the way business is conducted',
  },
  {
    content: 'Embrace large problems and tackle them with innovative solutions',
  },
  {
    content: 'Attract other great talent with a killer instinct',
  },
]

export const Mission = (): React.ReactElement => (
  <Section>
    <Container>
      <div>
        <H1>Our Mission</H1>
        <P>
          Our mission is to cultivate a leading start-up ecosystem among MBA and
          business school programs by providing founders with mentorship and
          seed-stage capital at the earliest stages of development.
          <br />
          <br />
          The MBA Fund is a community of entrepreneurs and investors that are
          passionate about building great businesses. We are not afraid to dig
          in at Day 0 and take the riskiest leaps with founders who are just
          getting started.
        </P>
      </div>
      <H2>We invest in the best founders, the ones who...</H2>

      <Container style={{ width: '80vw', paddingLeft: '10vw' }}>
        <Row margin={M2}>
          {stats.map(({ colorAlpha, content }: IStat) => (
            <Col sm={12} md={6} margin={M2}>
              <Card bordered shaded>
                <P mb0>{content}</P>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  </Section>
)
