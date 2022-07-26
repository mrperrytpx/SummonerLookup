import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { Footer } from "../organisms/Footer/Footer";
import { MobileNavbar } from "../organisms/MobileNavbar/MobileNavbar";

import { Navbar } from "../organisms/Navbar/Navbar";
import { SearchSummoner } from "../organisms/SearchSummoner/SearchSummoner";

export const Home = () => {

  const width = useScreenSize();

  const [checkedRadioButton, setCheckedRadioButton] = useState("eun1");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(prev => !prev);
  };

  const handleLabelClick = (e) => {
    console.log(e.target.htmlFor);
    setCheckedRadioButton(e.target.htmlFor);
  };

  const handleRadioClick = (e) => {
    setCheckedRadioButton(e.target.value);
  };

  return (
    <>
      <Navbar width={width} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      {!isNavOpen
        ? <main>
          <SearchSummoner
            handleLabelClick={handleLabelClick}
            handleRadioClick={handleRadioClick}
            checkedRadioButton={checkedRadioButton}
          />
        </main>
        : <MobileNavbar />}
      {width >= 600 && <Footer />}
    </>
  );
};