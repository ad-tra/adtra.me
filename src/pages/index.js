import React from "react"
import "../styles/global.scss"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

// markup
export default function IndexPage() {
  return (
    <Layout 
      headerText = "Hello. I'm Adam Trabelsi, a student &#38; an aspiring software engineer with focus on web development."
      >
      <SEO />
    </Layout>
  )
}
