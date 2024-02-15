import React from "react";
import NavbarContainer from "./navbar/NavbarContainer";
import { Outlet } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
const Layout = () => {
  return (
    <section id="main-block">
      <article>
        <NavbarContainer />
        <Toaster/>
        <Outlet />
      </article>
    </section>
  );
};

export default Layout;
