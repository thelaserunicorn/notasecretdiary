import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/ri.png"
import "./nav.css"

const Nav = () => (
  <nav>
    <div className="nav__items">
      <a className="nav__item--left" href="/">
        <img src={logo} alt="Rashid's Logo" className="nav__item--logo" />
      </a>
      <Link
        className={
          window.location.href.indexOf("About") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/blog/about-the-blog"
      >
        About
      </Link>
      <Link
        className={
          window.location.href.indexOf("blog") > 0 ||
          window.location.href.indexOf("category") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/blog"
      >
        Blog
      </Link>
    </div>
  </nav>
)

export default Nav
