import { useState } from "react";
import { Footer } from "../organisms/Footer/Footer";

import { Navbar } from "../organisms/Navbar/Navbar";
import { SearchSummoner } from "../organisms/SearchSummoner/SearchSummoner";

export const Home = () => {

  const [checkedRadioButton, setCheckedRadioButton] = useState("eun1");

  const handleLabelClick = (e) => {
    console.log(e.target.htmlFor);
    setCheckedRadioButton(e.target.htmlFor);
  };

  const handleRadioClick = (e) => {
    setCheckedRadioButton(e.target.value);
  };

  return (

    <>
      <Navbar />

      <main>

        <SearchSummoner
          handleLabelClick={handleLabelClick}
          handleRadioClick={handleRadioClick}
          checkedRadioButton={checkedRadioButton}
        />

      </main>

      <Footer />
    </>
  );
};