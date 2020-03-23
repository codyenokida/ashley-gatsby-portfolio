import React from "react"

import NavBar from "../NavBar/NavBar"

import './PageLayout.css'

const PageLayout = ({ title, children }) => {

  return (
    <div>
      <NavBar />
      <h1 class="titleText">{title}</h1>
      { children }
    </div>
  )
}

export default PageLayout
