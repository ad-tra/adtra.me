import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
// markup
export default function NotFoundPage() {
  return (
    <Layout
      headerText = "404 Not Found. I looked under the table and over the shelve, didn't find it." 
      error
    >
      <SEO 
        title = "404 - Adam Trabelsi " 
        description = "404 page is not found."
      />  
    </Layout>
  )
}

