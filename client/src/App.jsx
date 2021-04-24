import { useEffect, useState } from "react"

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {data && <p>{data}</p>}
      </header>
    </div>
  );
}

export default App;
