import Navbar from "./Navbar";
import SearchBar from "./SearchBar"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
