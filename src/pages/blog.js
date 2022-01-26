import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Section from "../components/Section"

export default function Blog({data}) {
    
    const blogPosts = [] 
    data.allMarkdownRemark.edges.forEach(edge=>{ 
        const blogPost = edge.node.frontmatter;
        if(blogPost.status === "public") blogPosts.push(blogPost);
    })


    
    return (
        <Layout>
            <SEO  title = "Blog - Adam Trabelsi" description = "a list of blog posts written by Adam Trabelsi" />
            
            <div className="long_content">
                <Section title = "blog" list = {blogPosts}/>
            </div>
        </Layout>        
    )
}
export const query = graphql`
    query{
        allMarkdownRemark {
            edges {
            node {
                frontmatter {
                slug
                title
                status
                }
            }
            }
        }
    }
`