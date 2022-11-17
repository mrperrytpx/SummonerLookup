import React from 'react';
import { Navbar } from '../organisms/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const WithNav = ({ setIsNavOpen, isNavOpen, handleNavOpen }) => {
  return (
    <>
      <Navbar
        setIsNavOpen={setIsNavOpen}
        isNavOpen={isNavOpen}
        handleNavOpen={handleNavOpen} />
      <Outlet />
    </>
  );
};