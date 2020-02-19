import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { TeamHero } from '../components/Team/Hero'
import {
  WideContainer,
  Section,
  Row,
  Col,
  Card,
  P,
  H2,
  H3,
  Img,
  LinkExternalLinkIcon,
  LinkedInIcon,
} from '../shared'
import { M1, M2, M3 } from '../constants/measurements'
import { DARK_GRAY } from '../constants/colors'

const HBSTeam = require('../data/HBS-team.json') as string // tslint:disable-line
const SGSBTeam = require('../data/SGSB-team.json') as string // tslint:disable-line
const WhartonTeam = require('../data/Wharton-team.json') as string // tslint:disable-line

const StyledCard = styled(Card)`
  text-align: center;
  padding-top: ${M3};
  padding-bottom: ${M3};
`

const StyledLink = styled.a`
  font-size: 1rem;
  padding: 0 ${M2} 0 ${M2};
  target: _blank;
`

const TeamPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Team" />
    <TeamHero />
    <WideContainer style={{ paddingTop: M3 }}>
      <Section>
        <H2>Harvard Team</H2>
        <Row margin={M2}>
          {HBSTeam.map(({ name, hometown, year, email }) => (
            <Col sm={12} md={4} margin={M2} key={name}>
              <StyledCard flex bordered hoverable>
                <H3 center>{name}</H3>
                <P center mb0>
                  {hometown} <br />
                  {year}
                </P>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </Section>
      <Section>
        <H2>Stanford Team</H2>
        <Row margin={M2}>
          {SGSBTeam.map(
            ({ name, hometown, year, email, bio, linkedin, otherLink }) => (
              <Col sm={12} md={4} margin={M2} key={name}>
                <StyledCard flex bordered hoverable>
                  <H3 center>{name}</H3>
                  <P center>
                    {hometown} <br />
                    {year}
                  </P>
                  <P center mb0>
                    {bio}
                  </P>
                  <Row>
                    <StyledLink
                      href="mailto:{email}"
                      target="_blank"
                    ></StyledLink>
                    <StyledLink href={linkedin} target="_blank">
                      <LinkedInIcon />
                    </StyledLink>
                    <StyledLink href={otherLink} target="_blank">
                      <LinkExternalLinkIcon />
                    </StyledLink>
                  </Row>
                </StyledCard>
              </Col>
            ),
          )}
        </Row>
      </Section>
      <Section>
        <H2>Wharton Team</H2>
        <Row margin={M2}>
          {WhartonTeam.map(
            ({ name, hometown, year, email, bio, linkedin, otherLink }) => (
              <Col sm={12} md={4} margin={M2} key={name}>
                <StyledCard flex bordered hoverable>
                  <H3>{name}</H3>
                  <P>
                    {year}
                    <br />
                    {hometown}
                  </P>
                  <P style={{ fontSize: '0.8rem' }}>{bio}</P>
                  <Row>
                    <StyledLink
                      href="mailto:{email}"
                      target="_blank"
                    ></StyledLink>
                    <StyledLink href={linkedin} target="_blank">
                      <LinkedInIcon />
                    </StyledLink>
                    <StyledLink href={otherLink} target="_blank">
                      <LinkExternalLinkIcon />
                    </StyledLink>
                  </Row>
                </StyledCard>
              </Col>
            ),
          )}
        </Row>
      </Section>
    </WideContainer>
  </Layout>
)
export default TeamPage
