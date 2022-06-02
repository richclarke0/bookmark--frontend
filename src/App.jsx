import './App.css';
import {useState, useEffect} from "react";
import Form
 from './components/Form';
const App = () => {
  const [links, setLinks] = useState(null);

  const url = "https://bookmark--backend.herokuapp.com/bookmarks/";

  const getLinks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLinks(data)
  };

  const createLink = async (link) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(link)
    })
    getLinks();
  }



  useEffect(() => {getLinks()}, []);
  
const loaded = () => {
  return (
    <div className="App">
      <h1 className="bookmark-title">Bookmark'd</h1>
        <Form />
        <hr />
      {links.map((info) => {
        return (
        <a className="links" key={info._id} href={info.url} rel="noreferrer" target="_blank">
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