import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='layout'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout