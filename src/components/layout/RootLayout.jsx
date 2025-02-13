import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout