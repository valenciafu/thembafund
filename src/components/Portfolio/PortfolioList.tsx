import React from 'react'
import { IPortfolio } from '../../types'
import { Fade, Section, H2, Row, Col, P } from '../../shared'
import { M2 } from '../../constants/measurements'
import { PortfolioItem } from './PortfolioItem'

interface IPortfolio {
  portfolio: IPortfolio[]
}

export const Portfolio = ({ portfolio }: IPortfolio) => (
  <>
    {portfolio.map(({ name }: IPortfolio) => (
      <Fade key={name} distance="1rem">
        <Row margin={M2}>
          {members.map((props: IMember) => (
            <TeamMemberPreview />
          ))}
        </Row>
      </Fade>
    ))}
  </>
)
