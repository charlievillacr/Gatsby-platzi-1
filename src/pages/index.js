import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from '../components'
import SEO from "../components/seo"
import "../components/layout.css"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite{
      edges{
        node{
          siteMetadata{
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
 return (
    <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Page 2</Link>
    <Link  style={{ padding: `0 3rem` }} to="/gracias/">Gracias</Link>
    <Link  style={{ padding: `0 3rem` }} to="/page-3/">Page 3</Link>
  </>
 )
}
  
  


export default IndexPage
