
import React from 'react'
import First from './First'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
    <First/>
      <h1>{children}</h1>
      <Footer/>
    </>
  )
}

export default Layout
