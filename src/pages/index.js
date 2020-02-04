import React from "react"
import { Link } from "gatsby"
import { Jumbo } from '../components'
import SEO from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link  style={{ padding: `0 3rem` }} to="/gracias/">Gracias</Link>
  </>
)

export default IndexPage
