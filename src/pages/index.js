import React from "react"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {graphql} from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/SEO"


export default function IndexPage({data}) {
  const { t } = useTranslation();
  console.log(data)
  return (
    <Layout 
      className = {data.locales.edges[0].node.language} 
      headerText = {t("Hello. I'm Adam Trabelsi, a student & an aspiring software engineer with focus on web development.")}>
      <SEO  title = {t("Adam Trabelsi - hi there : )")}/>
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;