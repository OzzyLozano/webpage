import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import BottomNavbar from "./Components/BottomNavbar";

const Layout = ({routes}) => {
  return (
    <>
      <Navbar routes={routes} />
      <div className='layout'>
        <Outlet />
      </div>
      <Footer />
      <BottomNavbar routes={routes} />
    </>
  )
}

export default Layout
