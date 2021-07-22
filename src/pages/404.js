import * as React from "react"

import Layout from "../components/Layout"
// markup
export default function NotFoundPage() {
  return (
    <Layout
      headerText = "404 Not Found. I looked under the table and over the shelve, didn't find it." 
      error
    ></Layout>
  )
}

