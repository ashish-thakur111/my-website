import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [toggleButton, setToggleButton] = useState(false)

  const showButton = () => {
    if (window.innerWidth <= 720) {
      setToggleButton(false)
    } else {
      setToggleButton(true)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", showButton) 
      showButton()
    }
  }, [])

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navbar}>
        <div className={headerStyles.title}>
          <Link to="/" className={headerStyles.title}>
            {data.site.siteMetadata.title}
          </Link>
        </div>
        <a
          href="#"
          className={headerStyles.toggleButton}
          onClick={() => setToggleButton(!toggleButton)}
        >
          <span className={headerStyles.bar}></span>
          <span className={headerStyles.bar}></span>
          <span className={headerStyles.bar}></span>
        </a>
        <div
          className={headerStyles.navbarLinks}
          style={
            window.innerWidth <= 720
              ? { display: toggleButton ? "flex" : "none" }
              : { visibility: "visible" }
          }
        >
          <ul>
            <li>
              <Link
                to="/"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
