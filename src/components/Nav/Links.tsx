import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import {
  maxWidth,
  minWidth,
  PHONE,
  DESKTOP,
  SHORT_ANIMATION_DURATION,
} from '../../constants/measurements'
import { BLACK } from '../../constants/colors'
import { INTER } from '../../constants/fonts'
import {
  ABOUT_ROUTE,
  PORTFOLIO_ROUTE,
  TEAM_ROUTE,
} from '../../constants/routes'

interface ILinksProps {
  active: boolean
}

const LinksWrapper = styled.div<ILinksProps>`
  flex: 1;
  text-align: right;

  ${maxWidth(PHONE)} {
    flex: none;
    text-align: left;
    display: block;
    overflow: hidden;
    transition: max-height ${SHORT_ANIMATION_DURATION}ms ease,
      opacity ${SHORT_ANIMATION_DURATION}ms ease;
    max-height: ${({ active }) => (active ? '100vh' : '0')};
    opacity: ${({ active }) => (active ? '1' : '0')};
  }
`

const Spacer = styled.div<{}>`
  display: none;

  ${maxWidth(PHONE)} {
    display: block;
    width: 100%;
    height: 0.5rem;
  }
`

const StyledLink = styled(Link)<{}>`
  height: 1rem;
  line-height: 2rem;
  margin-left: 1rem;
  color: ${BLACK};
  opacity: 0.64;
  text-decoration: none;
  cursor: pointer;
  transition: opacity ${SHORT_ANIMATION_DURATION}ms ease;
  font-family: ${INTER};
  font-weight: 400;
  font-size: 0.9rem;

  &:visited {
    color: ${BLACK};
  }

  &:hover,
  &:active {
    color: ${BLACK};
    opacity: 1;
  }

  ${minWidth(DESKTOP)} {
    margin-left: calc(1rem + 1.25vw);
  }

  ${maxWidth(PHONE)} {
    width: 100%;
    text-align: center;
    display: block;
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
`

const links: string[][] = [
  ['About', ABOUT_ROUTE],
  ['Portfolio', PORTFOLIO_ROUTE],
  ['Team', TEAM_ROUTE],
]

export const Links = ({ active }: ILinksProps): React.ReactElement => (
  <LinksWrapper active={active}>
    <Spacer />
    {links.map(([text, link]) => (
      <StyledLink to={link} key={link}>
        {text}
      </StyledLink>
    ))}
  </LinksWrapper>
)
