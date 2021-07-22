import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function blog() {
    return (
        <Layout>
            <div className="long_content">
                <section >
                    <h1 className="title">Blog</h1>
                    <ul className="blog_posts_list">
                        <li className= "blog_posts_list_item"><Link to="/501">Reverse Engineering a CollegeBoard App ft. Electron</Link></li>
                        <li className ="blog_posts_list_item"><Link to="/501">Exporting AI Freeform Gradients to The Web </Link></li>
                    </ul>
                </section>
            </div>
        </Layout>        
    )
}
