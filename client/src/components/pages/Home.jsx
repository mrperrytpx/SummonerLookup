import { Navbar } from "../organisms/Navbar/Navbar";

import { useState } from "react";
import { CheckedServer } from "../molecules/CheckedServer/CheckedServer";

const SERVER_VALUES = {
  "eun1": "EUNE",
  "euw1": "EUW",
  "tr1": "TR",
  "ru1": "RU",
  "na1": "NA",
  "las1": "LAS",
  "lan1": "LAN",
  "br1": "BR",
  "oce1": "OCE",
  "jp1": "JP",
  "kr1": "KR",
};

const Home = () => {

  const [checkedRadioButton, setCheckedRadioButton] = useState("euw1");


  function handleSubmit(e) {
    e.preventDefault();
    const myRadioInput = checkedRadioButton;
    if (!myRadioInput) {
      alert("no");
      return;
    }
    console.log(myRadioInput);
  }

  const handleLabelClick = (e) => {
    console.log(e.target.htmlFor);
    setCheckedRadioButton(e.target.htmlFor);
  };

  const handleRadioClick = (e) => {
    setCheckedRadioButton(e.target.value);
  };

  return (

    <div className='page-wrapper'>

      <Navbar />

      <main>

        <form className="searchbar-container" onSubmit={(e) => handleSubmit(e)}>

          <div className="input-container">

            <input placeholder='Enter a summoner name' />

          </div>

          <div className="regions-container">

            {[...Object.keys(SERVER_VALUES)].map((server, i) => (
              <CheckedServer
                key={server}
                server={server}
                i={i}
                handleLabelClick={handleLabelClick}
                handleRadioClick={handleRadioClick}
                checkedRadioButton={checkedRadioButton}
              >
                {SERVER_VALUES[server]}
              </CheckedServer>
            ))}
            {/* <label style={{ color: "white" }} className="region-container">EUNE */}
            {/* <input type="radio" value="eun1" name="region" /> */}
            {/* </label>
            <label className="region-container">EUW
              <input type="radio" name="region" value="euw1" />
            </label>
            <label className="region-container">TR
              <input type="radio" name="region" value="tr1" />
            </label>
            <label className="region-container">RU
              <input type="radio" name="region" value="ru1" />
            </label>
            <label className="region-container">NA
              <input type="radio" name="region" value="na1" />
            </label>
            <label className="region-container">LAS
              <input type="radio" name="region" value="las1" />
            </label>
            <label className="region-container">LAN
              <input type="radio" name="region" value="lan1" />
            </label>
            <label className="region-container">OCE
              <input type="radio" name="region" value="oce1" />
            </label>
            <label className="region-container">JP
              <input type="radio" name="region" value="jp1" />
            </label>
            <label className="region-container">KR
              <input type="radio" name="region" value="kr1" />
            </label>
            <label className="region-container">BR
              <input type="radio" name="region" value="br1" />
            </label> */}

          </div>

        </form>


      </main>
    </div >
  );
};

export default Home;