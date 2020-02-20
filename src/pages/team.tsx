import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { TeamHero } from '../components/Team/Hero'
import TeamSection from '../components/Team/TeamSection'
import {
	WideContainer,
	Section,
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
import { DARK_GRAY } from '../constants/colors'

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

const TeamPage = (props): React.ReactElement => (
	<Layout>
		<SEO title="Team" />
		<TeamHero />
		<TeamSection name="Harvard Team" path={HarvardTeam} />
		<TeamSection name="Stanford Team" path={StanfordTeam} />
		<TeamSection name="Wharton Team" path={WhartonTeam} />
	</Layout>
)
export default TeamPage
