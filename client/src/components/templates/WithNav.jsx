import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../organisms/Navbar/Navbar';

export const WithNav = ({ setIsNavOpen, isNavOpen, handleNavOpen }) => {

  const { pathname } = useLocation();

  useEffect(() => {
    setIsNavOpen(() => false);
  }, [pathname, setIsNavOpen]);

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