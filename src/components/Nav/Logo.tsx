import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { HOME_ROUTE } from '../../constants/routes'

const logoPath = require('../../images/mba-logo.png') as string // tslint:disable-line

const Image = styled.img<{}>`
  height: 2rem;

  margin-bottom: 0;
  overflow: visible;
`

export const Logo = (): React.ReactElement => (
  <Link to={HOME_ROUTE} style={{ lineHeight: 0 }}>
    <Image src={logoPath} alt="The MBA Fund" />
  </Link>
)
