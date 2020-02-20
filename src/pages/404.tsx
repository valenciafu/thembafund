import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container, H1, P, Section, LinkChevronRightIcon } from '../shared'
import { Link } from 'gatsby'
import { HOME_ROUTE } from '../constants/routes'

const NotFoundPage = (): React.ReactElement => (
  <Layout>
    <Section>
      <Container style={{ textAlign: 'center' }}>
        <SEO title="404: Not found" />
        <H1 mb2>Not Found</H1>
        <P>The page you were looking for does not exist.</P>
        <Link to={HOME_ROUTE}>
          Back to home <LinkChevronRightIcon />
        </Link>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
