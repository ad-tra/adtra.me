import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            keywords
            
          }
        }
      }
    `
    )
    
    const metaDescription = description || site.siteMetadata.description
    const image = `${site.siteMetadata.siteUrl}/favicon.ico`
    const metaImage = {width: 255, height: 255}
  
    return (
    <Helmet
        htmlAttributes={{
            lang,
        }}
        title={title ? title : site.siteMetadata.title}
        meta={[
            {
                name: `description`,
                content: metaDescription,
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
        ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}
SEO.defaultProps = {
  lang: `en-US`,
  meta: [],
  description: ``,
}