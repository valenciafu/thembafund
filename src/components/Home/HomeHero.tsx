import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { Section, Container, H1, Img } from '../../shared'

import { HEADER_HEIGHT } from '../../constants/measurements'
import { TEAL_ALPHA, LILAC_ALPHA } from '../../constants/colors'
import {
  maxWidth,
  TABLET,
  minWidth,
  DESKTOP,
} from '../../constants/measurements'

const Parent = styled(Section)`
  position: relative;
  margin-top: 0rem;
  padding-top: 0rem;
  background-image: linear-gradient(
    -45deg,
    ${LILAC_ALPHA(0.7)},
    ${TEAL_ALPHA(0.6)}
  );
  height: 90vh;
  padding-bottom: 1rem;
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  z-index: -1;
`

const DesktopImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;

  object-fit: cover;

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }

  ${maxWidth(TABLET)} {
    display: none;
  }
`

const MobileImage = styled(Img)`
  height: 100%;
  margin-bottom: 0;
  object-fit: cover;

  ${minWidth(TABLET)} {
    display: none;
  }
`

const TextDiv = styled.div`
  position: absolute;
  margin-top: 30%;
  width: 86vw;
  margin-left: 7vw;

  ${minWidth(TABLET)} {
    margin-top: 32vh;
  }
`

const StyledH1 = styled(H1)`
  font-size: 2rem;
  line-height: 7vh;

  ${minWidth(DESKTOP)} {
    font-size: 3.5vw;
    line-height: 9vh;
  }
`

export const HomeHero = () => {
  return (
    <Parent>
      <TextDiv>
        <StyledH1 center white>
          A network of founders, executives and investors committed to mentoring
          and investing in leading early-stage, student and alumni founders.
        </StyledH1>
      </TextDiv>
      <ImageWrapper>
        <DesktopImage
          src="https://the-mba-fund.s3.us-east-2.amazonaws.com/misc/hero-home.jpg"
          style={{
            marginTop: '0',
            marginBottom: '0',
          }}
        />

        <MobileImage
          src="https://the-mba-fund.s3.us-east-2.amazonaws.com/misc/hero-home.jpg"
          style={{
            marginTop: '0',
            marginBottom: '0',
          }}
        />
      </ImageWrapper>
    </Parent>
  )
}
