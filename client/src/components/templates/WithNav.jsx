import { Footer } from "components/organisms/Footer/Footer";
import { useScreenSize } from "hooks/useScreenSize";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../organisms/Navbar/Navbar";

export const WithNav = ({ setIsNavOpen, isNavOpen, handleNavOpen }) => {
    const { pathname } = useLocation();
    const { width } = useScreenSize();

    useEffect(() => {
        setIsNavOpen(() => false);
    }, [pathname, setIsNavOpen]);

    return (
        <>
            <Navbar
                setIsNavOpen={setIsNavOpen}
                isNavOpen={isNavOpen}
                handleNavOpen={handleNavOpen}
            />
            <Outlet />
            {width >= 750 && <Footer />}
        </>
    );
};
