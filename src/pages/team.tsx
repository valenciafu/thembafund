import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { WideContainer } from '../shared'
import { TeamHero } from '../components/Team/Hero'

const TeamPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Team" />
    <WideContainer>
      <TeamHero />
      <Teams />
    </WideContainer>
  </Layout>
)
export default TeamPage
