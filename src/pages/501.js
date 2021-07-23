import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
// markup
export default function NotFoundPage() {
  return (
    <Layout
      headerText = "501 Page Under Construction. I'm working on it, already have a pencil over my ear. See you soon." 
      error
    >
      <SEO 
        title = "501 - Adam Trabelsi " 
        description = "501 page is under construction."
      />  
    </Layout>
  )
}

