import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title} &#x1F330;</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        Назад к орешкам
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {/* <footer>
        Сейчас {new Date().getFullYear()} год
      </footer> */}
    </div>
  )
}

export default Layout
