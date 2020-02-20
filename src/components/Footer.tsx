import React from 'react'

import { P, Container } from '../shared'
import { ALLBIRDS_GRAY, PINK } from '../constants/colors'

// TODO facebook and github

export default (): React.ReactElement => (
  <footer>
    <Container>
      <P style={{ textAlign: 'center', marginTop: '1.45rem' }} opacity={0.8} sm>
        The MBA Fund © {new Date().getFullYear()}. Made with{' '}
        <span style={{ color: PINK }}>&hearts;</span> in Philadelphia.
      </P>
    </Container>
  </footer>
)
