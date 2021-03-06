import React from 'react'
import styled from 'styled-components'

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
  MailIcon,
  LinkIcon,
  LinkedInIcon,
} from '../../shared'
import { M1, M2, M3 } from '../../constants/measurements'
import { DARK_GRAY } from '../../constants/colors'
import TeamModal from './TeamModal'

const StyledCard = styled(Card)`
  text-align: center;
  padding-top: ${M3};
`

const StyledLink = styled.a`
  font-size: 0.5rem;
  padding: 0 ${M2} 0 ${M2};
  target: _blank;
`

const StyledImg = styled(Img)`
  height: 8rem;
  width: 8rem;
  border-radius: 6rem;
  object-fit: cover;
`

const TeamSection = (props): React.ReactElement => (
  <WideContainer style={{ paddingTop: M3 }}>
    <Section>
      <H2>{props.name}</H2>
      <Row margin={M2}>
        {props.path.map(
          ({ image, name, year, email, bio, linkedin, otherLink }) => (
            <Col sm={12} md={6} lg={3} margin={M2} key={name}>
              <StyledCard flex bordered>
                <StyledImg src={image} />
                <H3 center mb1>
                  {name}
                </H3>
                <P center>{year}</P>
                <P center style={{ fontSize: '0.8rem', lineHeight: '1.2rem' }}>
                  {bio}
                </P>
                <StyledLink href={linkedin} target="_blank">
                  <LinkedInIcon style={{ height: '18px' }} />
                </StyledLink>
                {otherLink && (
                  <StyledLink href={otherLink} target="_blank">
                    <LinkIcon style={{ height: '18px' }} />
                  </StyledLink>
                )}
              </StyledCard>
            </Col>
          ),
        )}
      </Row>
    </Section>
  </WideContainer>
)
export default TeamSection
