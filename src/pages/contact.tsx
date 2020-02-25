import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Contact } from '../components/misc/Contact'

const ContactPage = (): React.ReactElement => (
	<Layout>
		<SEO title="Contact" />
		<Contact />
	</Layout>
)

export default ContactPage
