function Home() {
  return (
    <main>
      <nav>
        <div className="image-container">
          <img src="./" />
        </div>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>

      <form>
        <div className="search-wrapper">

          <div className="search-bar">
            <input type="text" />
            <button type="submit" >SEARCH</button>
          </div>

          <div className="regions-container">
            <button type="">EUNE</button>
            <button type="">EUW</button>
            <button type="">TR</button>
            <button type="">RU</button>
            <button type="">NA</button>
            <button type="">OCE</button>
            <button type="">LAN</button>
            <button type="">LAS</button>
            <button type="">BR</button>
            <button type="">KR</button>
            <button type="">JP</button>

          </div>
        </div>

      </form>


    </main>
  );
}

export default Home;