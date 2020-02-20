import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import { Section, Container, H1 } from '../../shared'

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

const FakeBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`

const TextDiv = styled.div`
  position: absolute;
  margin-top: 32vh;
  width: 86vw;
  margin-left: 7vw;
`

const StyledH1 = styled(H1)`
  ${minWidth(DESKTOP)} {
    font-size: 3.5vw;
    line-height: 9vh;
  }
`

export const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query {
      homeHeroImg: file(relativePath: { eq: "home/hero-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Parent>
      <TextDiv>
        <StyledH1 center white>
          A network of founders, executives and investors committed to mentoring
          and investing in leading early-stage, student and alumni founders.
        </StyledH1>
      </TextDiv>
      <FakeBgImage
        fluid={data.homeHeroImg.childImageSharp.fluid}
        style={{
          marginTop: '0',
          marginBottom: '0',
        }}
      />
    </Parent>
  )
}
