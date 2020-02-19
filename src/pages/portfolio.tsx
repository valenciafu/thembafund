import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { PortfolioHero } from '../components/Portfolio/Hero'
import { WideContainer, Row, Col, Card, P, H3, Img } from '../shared'
import { M1, M2, M3 } from '../constants/measurements'

const portfolio = require('../data/portfolio.json') as string // tslint:disable-line

const LogoImg = styled(Img)`
	max-width: 6rem;
	max-height: 4rem;
	border-radius: ${M1};
`

const StyledCard = styled(Card)`
	text-align: center;
	padding-top: ${M3};
	padding-bottom: ${M3};
`

const PortfolioPage = (): React.ReactElement => (
	<Layout>
		<SEO title="Portfolio" />
		<PortfolioHero />
		<WideContainer style={{ paddingTop: M3 }}>
			<Row margin={M2}>
				{portfolio.map(({ name, description, link, image }) => (
					<Col sm={12} md={4} margin={M2} key={name}>
						<a href={link} target="_blank">
							<StyledCard bordered hoverable>
								<LogoImg src={image} />
								<H3 center>{name}</H3>
								<P center mb0>
									{description}
								</P>
							</StyledCard>
						</a>
					</Col>
				))}
			</Row>
		</WideContainer>
	</Layout>
)

export default PortfolioPage
