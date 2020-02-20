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

const StyledCard = styled(Card)`
  text-align: center;
  padding-top: ${M3};
  padding-bottom: ${M3};
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
          ({
            image,
            name,
            hometown,
            year,
            email,
            bio,
            linkedin,
            otherLink,
          }) => (
            <Col sm={12} md={4} margin={M2} key={name}>
              <StyledCard flex bordered>
                <StyledImg src={image} />
                <H3 center>{name}</H3>
                <P center>
                  {hometown} • {year}
                </P>
                <P center style={{ fontSize: '0.8rem' }}>
                  {bio}
                </P>
                <StyledLink href="mailto:{email}" target="_blank">
                  <MailIcon />
                </StyledLink>
                <StyledLink href={linkedin} target="_blank">
                  <LinkedInIcon />
                </StyledLink>
                {otherLink && (
                  <StyledLink href={otherLink} target="_blank">
                    <LinkIcon />
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