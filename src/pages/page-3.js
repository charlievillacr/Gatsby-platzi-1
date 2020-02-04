import React from "react"

import { Link } from "gatsby"

import SEO from "../components/seo"

const ThirdPage = () => (
    <div>
        <SEO title="Page Three" />
        <h1>Hi from the third page</h1>
        <p>Welcome to page 3</p>
        <Link to="/">Homepage</Link>
        <Link style={{ padding: `0 3rem` }} to="/page-2/">Page 2</Link>
    </div>
)

export default ThirdPage