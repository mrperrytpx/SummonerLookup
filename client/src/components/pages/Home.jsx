import React from 'react';
import useScreenSize from '../../hooks/useScreenSize';

import NavButton from '../atoms/NavButton/NavButton';
import FuncButton from '../atoms/FuncButton/FuncButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const screenWidth = useScreenSize();

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    const myRadioInput = e.target.elements.region.value;
    if (!myRadioInput) {
      alert("no");
      return;
    }
    console.log(myRadioInput);
  }

  return (

    <div className='page-wrapper'>

      <header>

        <div className='logo-container'>

          <img src='' alt="daskldas" />

        </div>

        {/* {screenWidth > 800 && <div className='searchbar-placeholder'></div>} */}

        <nav>
          <NavButton href="/signup">Sign Up</NavButton>
          <NavButton href="/signin">Sign in</NavButton>
        </nav>

      </header>

      <main>

        <form className="searchbar-container" onSubmit={(e) => handleSubmit(e)}>

          <img src="https://media.discordapp.net/attachments/417341511450099714/986631768889241660/unknown.png" alt="logo?" />

          <div className="input-container">

            <input placeholder='Enter a summoner name' />
            <FuncButton onClick={() => navigate("/fukk")}>Search</FuncButton>

          </div>

          <div className="regions-container">

            <label className="region-container">EUN
              <input type="radio" value="eun1" name="region" />
            </label>
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
            </label>

          </div>

        </form>


      </main>
    </div>
  );
};

export default Home;