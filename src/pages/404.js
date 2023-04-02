import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NotFoundPic from "../images/404-pic.png"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: такой страницы нет" />
      <h1>404: такой страницы нет</h1>
      <p>Куда-то не туда ты попал. Ничего, я тоже сворачивал не на ту дорожку.</p>
      <img className="not-found-pic" src={NotFoundPic} alt="Я с сигаретой во рту в молодости" title="Я с сигаретой во рту в молодости"/>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
