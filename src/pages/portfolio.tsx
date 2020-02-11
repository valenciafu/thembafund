import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { PortfolioHero } from '../components/Portfolio/Hero'
import { Section, Container, Row, Col, P, H2, H3, Img } from '../shared'
import { M2 } from '../constants/measurements'

const portfolio = require('../data/portfolio.json') as string // tslint:disable-line

const PortfolioPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioHero />
    <Container></Container>
  </Layout>
)

export default PortfolioPage
