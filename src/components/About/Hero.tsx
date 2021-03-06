import React from 'react'
import styled from 'styled-components'

import { Section, Container, H1, P } from '../../shared'
import { TEAL, LILAC } from '../../constants/colors'

const StyledSection = styled(Section)`
  background-image: linear-gradient(90deg, ${TEAL}, ${LILAC});
`

export const AboutHero = () => {
  return (
    <StyledSection>
      <Container>
        <H1 white mb0>
          About Us
        </H1>
      </Container>
    </StyledSection>
  )
}
