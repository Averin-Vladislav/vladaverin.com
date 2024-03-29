/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProfilePic from "../images/profile-pic.jpg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <img className="bio-avatar" src={ProfilePic} alt="Аватар Влада"/>
      <p>
        Меня зовут {author.name}. 
        {` `} Здесь я рассказываю про то, что мне интересно, чтоб было что вспомнить в старости. {` `}
        <a href="./about">
          <span> Больше обо мне</span>
        </a>
      </p>
    </div>
  )
}

export default Bio
