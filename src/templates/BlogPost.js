import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function BlogPost({data}) {
    return (
        <Layout>
            <div className = "blog_post" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            <SEO
                title = {data.markdownRemark.frontmatter.title}
                description = {data.markdownRemark.frontmatter.description}
            />
        </Layout>
    )
}

export const query = graphql`
    query BlogPost($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            timeToRead
            frontmatter {
                description
                title
            }
        }
    }
`