import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { H1, H2, P, Container, Section, Row, Col } from '../../shared'
import { WHITE, ALLBIRDS_GRAY, TEAL, LILAC } from '../../constants/colors'
import {
  BORDER_RADIUS_LG,
  M2,
  maxWidth,
  PHONE,
} from '../../constants/measurements'

const fundersPath = require('../../images/home/cofunder-logos.png') as string // tslint:disable-line

const StyledSection = styled(Section)`
  background-image: linear-gradient(90deg, ${TEAL}, ${LILAC});
`

export const Funded = (): React.ReactElement => (
  <>
    <StyledSection>
      <Container>
        <H2 white mb0>
          We’ve invested in startups who have also raised funding from...
        </H2>
      </Container>
    </StyledSection>
    <Container>
      <img src={fundersPath} />
    </Container>
  </>
)
