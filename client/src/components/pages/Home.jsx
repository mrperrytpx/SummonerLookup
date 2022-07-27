import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

import { Footer } from "../organisms/Footer/Footer";
import { MobileMenu } from "../organisms/MobileMenu/MobileMenu";
import { Navbar } from "../organisms/Navbar/Navbar";
import { SearchSummoner } from "../organisms/SearchSummoner/SearchSummoner";
import { FlexColCenter } from "../atoms/FlexBoxes/FlexBoxes.styled";

export const Home = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useScreenSize(setIsNavOpen);

  const handleNavOpen = () => setIsNavOpen(prev => !prev);

  useEffect(function closeNav() {
    if (width >= 600 && isNavOpen) setIsNavOpen(false);
  }, [width, isNavOpen, setIsNavOpen]);

  return (
    <>
      <Navbar width={width} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      {
        !isNavOpen
          ? <FlexColCenter as="main" style={{ minHeight: "calc(100vh - 1rem - 80px)" }}>
            <SearchSummoner />
          </FlexColCenter>
          : <MobileMenu />
      }
      {width >= 600 ? <Footer /> : null}
    </>
  );
};