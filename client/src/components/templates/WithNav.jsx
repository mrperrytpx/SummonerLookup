import { useEffect } from 'react';
import { Navbar } from '../organisms/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

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