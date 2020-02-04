import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link  style={{ padding: `0 3rem` }} to="/page-3/">Page 3</Link>
  </>
)

export default SecondPage
