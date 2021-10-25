import React from 'react'
import { Link, graphql } from 'gatsby'
import { nanoid } from 'nanoid'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Blog({data}) {
    return (
        <Layout>
            <SEO 
                title = "Blog - Adam Trabelsi"
                description = "a list of blog posts written by Adam Trabelsi" 
            />
             
            <div className="long_content">
                <section >
                    <h1 className="title">Blog</h1>
                    <ul className="blog_posts_list">{
                        
                        data.allMarkdownRemark.edges.map(edge=>{ 
                            const frontmatter = edge.node.frontmatter;
                            
                            if(frontmatter.status === "public"){
                                return (
                                <li key = {nanoid()} className= "blog_posts_list_item">
                                    <Link to={`./${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                                </li>
                                )
                            } 
                            return;
                        })
                    
                    }
                    </ul>
                </section>
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