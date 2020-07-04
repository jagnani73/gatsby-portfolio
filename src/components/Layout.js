import React from "react"

// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = props => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout
