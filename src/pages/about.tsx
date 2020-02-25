import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { AboutHero } from '../components/About/Hero'
import { Mission } from '../components/About/Mission'
import { Funded } from '../components/About/Funded'

const AboutPage = (): React.ReactElement => (
  <Layout>
    <SEO title="About" />
    <AboutHero />
    <Mission />
    <Funded />
  </Layout>
)

export default AboutPage
