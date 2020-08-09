import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import Featured from "../components/featured"
import Home from "../components/home"
import Layout from "../components/layout"
import Footer from "../components/footer"
import "./index.css"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" className="viewmore">
      View More
    </Link>
    <Footer />
  </Layout>
)

export default IndexPage
