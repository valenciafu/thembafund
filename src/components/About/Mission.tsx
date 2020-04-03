import React from 'react'
import styled from 'styled-components'

import {
  H1,
  H2,
  P,
  WideContainer,
  Section,
  Card,
  Row,
  Col,
  Img,
} from '../../shared'
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
  M4,
  maxWidth,
  PHONE,
} from '../../constants/measurements'

const StyledCard = styled(Card)`
  padding: 0rem;
`

const StyledImg = styled(Img)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  margin-top: none;
  border-radius: ${BORDER_RADIUS_LG} ${BORDER_RADIUS_LG} 0rem 0rem;
`

const StyledP = styled(P)`
  margin-left: ${M2};
  margin-right: ${M2};
`

interface IStat {
  content: string
}

const stats: IStat[] = [
  {
    content: 'Understand what they need to get from 0 to 1, and 1 to 10.',
    image:
      'https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/work.jpg',
  },
  {
    content: 'Dream large enough to change the way business is conducted.',
    image:
      'https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/building.jpg',
  },
  {
    content:
      'Embrace large problems and tackle them with innovative solutions.',
    image:
      'https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/mountain.jpg',
  },
  {
    content: 'Attract other great talent with a killer instinct.',
    image:
      'https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/meeting.jpg',
  },
]

export const Mission = (): React.ReactElement => (
  <Section>
    <WideContainer>
      <H1>Our Mission</H1>
      <P>
        Our mission is to cultivate a leading start-up ecosystem among MBA and
        business school programs by providing founders with mentorship and
        seed-stage capital at the earliest stages of development.
        <br />
        <br />
        The MBA Fund is a community of entrepreneurs and investors that are
        passionate about building great businesses. We are not afraid to dig in
        at Day 0 and take the riskiest leaps with founders who are just getting
        started.
      </P>

      <Section>
        <WideContainer>
          <H2 center>We invest in the best founders, the ones who...</H2>
          <Row margin={M2}>
            {stats.map(({ content, image }: IStat) => (
              <Col sm={12} md={6} margin={M2}>
                <StyledCard bordered shaded>
                  <StyledImg src={image} />
                  <StyledP>{content}</StyledP>
                </StyledCard>
              </Col>
            ))}
          </Row>
        </WideContainer>
      </Section>
    </WideContainer>
  </Section>
)
