import React from "react"

import "./Layout.css"
import NavBar from "../NavBar/NavBar"

const Layout = ({ children }) => {

  return (
    <main>
      <NavBar />
      { children }
    </main>
  )
}

export default Layout
