import React from 'react'
import styled from 'styled-components'
import {
  ScrollingProvider,
  SectionLink,
  SectionLinks,
  Section,
} from 'react-scroll-section'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { TeamHero } from '../components/Team/Hero'
import TeamSection from '../components/Team/TeamSection'
import {
  WideContainer,
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
import { DARK_GRAY, MBA_AQUA, OUTLINE } from '../constants/colors'
import { maxWidth, PHONE } from '../constants/measurements'

const GPTeam = require('../data/gp-team.json') as string // tslint:disable-line
const HarvardTeam = require('../data/harvard-team.json') as string // tslint:disable-line
const StanfordTeam = require('../data/stanford-team.json') as string // tslint:disable-line
const WhartonTeam = require('../data/wharton-team.json') as string // tslint:disable-line

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

const NavBox = styled.div<{}>`
  width: 5.5rem;
  height: auto;
  position: fixed;
  bottom: 30vh;
  left: 18px;
  text-align: left;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s ease;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);

  ${maxWidth(PHONE)} {
    bottom: 9px;
    right: 9px;
  }
`

const NavLink = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding-left: 1rem;
  margin-bottom: 1rem;
  user-select: none;
  color: ${props => (props.selected ? `${MBA_AQUA}` : 'inherit')};
  border-left: 0.3rem solid
    ${props => (props.selected ? `${MBA_AQUA}` : 'transparent')};
`

const TeamPage = (props): React.ReactElement => (
  <Layout>
    <ScrollingProvider scrollbehavior="smooth">
      <SEO title="Team" />
      <NavBox>
        <SectionLink section="gp">
          {({ onClick, isSelected }) => (
            <NavLink onClick={onClick} selected={isSelected}>
              General Partners
            </NavLink>
          )}
        </SectionLink>
        <SectionLink section="harvard">
          {({ onClick, isSelected }) => (
            <NavLink onClick={onClick} selected={isSelected}>
              Harvard
            </NavLink>
          )}
        </SectionLink>
        <SectionLink section="stanford">
          {({ onClick, isSelected }) => (
            <NavLink onClick={onClick} selected={isSelected}>
              Stanford
            </NavLink>
          )}
        </SectionLink>
        <SectionLink section="wharton">
          {({ onClick, isSelected }) => (
            <NavLink onClick={onClick} selected={isSelected}>
              Wharton
            </NavLink>
          )}
        </SectionLink>
      </NavBox>
      <TeamHero />
      <Section id="gp">
        <TeamSection name="General Partners" path={GPTeam} />
      </Section>
      <Section id="harvard">
        <TeamSection name="Harvard Team" path={HarvardTeam} />
      </Section>
      <Section id="stanford">
        <TeamSection name="Stanford Team" path={StanfordTeam} />
      </Section>
      <Section id="wharton">
        <TeamSection name="Wharton Team" path={WhartonTeam} />
      </Section>
    </ScrollingProvider>
  </Layout>
)
export default TeamPage
