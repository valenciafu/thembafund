import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { Card } from '../shared'
import { ProductOverview } from '../components/Products/ProductOverview'
import { PRODUCTS_ROUTE } from '../constants/routes'
import { M4, M2 } from '../constants/measurements'

const Logo = styled.img<{}>`
  height: 3.2rem;
  margin-bottom: ${M4};
  display: inline-block;
`

const PortfolioItem = () => (
  <StaticQuery>
    query=
    {graphql`
      query PortfolioItemsQuery {
        allPortfolioJson {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => <Card>{data}</Card>}
  </StaticQuery>
)

export default PortfolioItem
