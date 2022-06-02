import './App.css';
import {useState, useEffect} from "react";
const App = () => {
  const [links, setLinks] = useState(null);

  const url = "https://bookmark--backend.herokuapp.com/bookmarks/";

  const getLinks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLinks(data)
  };

  useEffect(() => {getLinks()}, []);
  
const loaded = () => {
  return (
    <div className="App">
      {links.map((info) => {
        return (
        <a key={info._id} href={info.url} target="_blank">
            <h1>{info.title}</h1>
        </a>
        )
      })}
    </div>
  );
    }
    return links ? loaded() : <h1>Loading...</h1>
}

export default App;