import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

import { Footer } from "../organisms/Footer/Footer";
import { MobileNavbar } from "../organisms/MobileNavbar/MobileNavbar";
import { Navbar } from "../organisms/Navbar/Navbar";
import { SearchSummoner } from "../organisms/SearchSummoner/SearchSummoner";
import { FlexColCenter } from "../atoms/FlexBoxes/FlexBoxes.styled";

export const Home = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useScreenSize(setIsNavOpen);

  const handleNavOpen = () => setIsNavOpen(prev => !prev);

  useEffect(() => {
    if (width >= 600 && isNavOpen) {
      console.log("Closing nav");
      setIsNavOpen(false);
    }
  }, [width, isNavOpen, setIsNavOpen]);

  return (
    <>
      <Navbar width={width} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      {!isNavOpen
        ? <FlexColCenter as="main" style={{ minHeight: "calc(100vh - 1rem - 80px)" }}>
          <SearchSummoner />
        </FlexColCenter>
        : <MobileNavbar />}
      {width >= 600 ? <Footer /> : null}
    </>
  );
};