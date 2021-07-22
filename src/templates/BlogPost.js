import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'

export default function BlogPost({data}) {
    return (
        <Layout>
            <div className = "blog_post" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        </Layout>
    )
}

export const query = graphql`
    query BlogPost($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            timeToRead
        }
    }
`