import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import BottomNavbar from "./Components/BottomNavbar";

const Layout = ({currentPage, changePage, routes}) => {
  return (
    <>
      <Navbar currentPage={currentPage} changePage={changePage} routes={routes} />
      <div className='layout'>
        <Outlet />
      </div>
      <Footer />
      <BottomNavbar currentPage={currentPage} changePage={changePage} routes={routes} />
    </>
  )
}

export default Layout
