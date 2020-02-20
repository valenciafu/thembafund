import React, { ReactElement } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const IMAGE =
  'https://the-mba-fund.s3.us-east-2.amazonaws.com/misc/mba-metadata.png'
const URL = 'thembafund.com'

type Meta =
  | { name: string; content: any; property?: undefined }
  | { property: string; content: any; name?: undefined }

export interface ISEOProps {
  description?: string
  lang?: string
  meta?: Meta[]
  title?: string
  image?: string
  url?: string
}

function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title = '',
  image = IMAGE,
  url = URL,
}: ISEOProps): ReactElement {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | The MBA Fund`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: `The MBA Fund <contact@${URL}>`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image-alt`,
          content: 'The MBA Fund Logo',
        },
        {
          name: `twitter:site`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:image-alt`,
          content: 'The MBA Fund logo',
        },
      ].concat(meta)}
    />
  )
}

export default SEO
