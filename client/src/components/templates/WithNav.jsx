import React from 'react';
import { Navbar } from '../organisms/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const WithNav = ({ width, setIsNavOpen, isNavOpen, handleNavOpen }) => {
  return (
    <>
      <Navbar width={width} setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      <Outlet />
    </>
  );
};